import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import csvToJson from 'convert-csv-to-json';

import saveDataInDb from './saveDataInDb';
import isAdmin from './middlewares/isAdmin';
import NikoOptSchema from './models/nikoOptSchema';

// constants
const URL_01 = `${__dirname}/URL/price_two.csv`;
const dbURL = 'mongodb://balabukha:86yerdna@ds151908.mlab.com:51908/sample_shop';

let arr = []; // arr to saveinDb()

// connecting to MongoDb
mongoose.connect(dbURL);

// run express
const app = express();

// run bodyParser
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


// app.get('/all', (req, res) => {
//   const json = csvToJson.getJsonFromCsv(URL_01);
//   res.send(JSON.parse(JSON.stringify(json)));
// });

app.get('/:shopName/:productId', async (req, res) => {
  if (req.params.shopName === 'nikoOpt') {
    const item = await NikoOptSchema.findOne({
      Reference: req.params.productId,
    });
    res.send(item);
  }
  res.send('no item :((');
});

app.get('/upload', async (req, res) => {
  const json = await csvToJson.getJsonFromCsv(URL_01);
  if (json !== undefined && json !== undefined) {
    arr = json; // upload data to a global var
    return res.status(200).send('got data');
  }
});

app.get('/saveinDb', async (req, res) => {
  try {
    const result = await saveDataInDb(arr);
    arr = []; // delete global var
    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// If !isAdmin -> reject
app.post('/:shopName', isAdmin, async (req, res) => {
  if (req.params.shopName === 'nikoOpt') {
    await NikoOptSchema.remove({}); // removing all data from DB
    const json = await csvToJson.getJsonFromCsv(URL_01);
    try { // saving a new data to MongoDb
      const result = await saveDataInDb(json);
      return res.status(200).json(result);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
  res.send('no shop yet :(('); // if no shopName matches
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
