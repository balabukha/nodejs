const URL_01 = `${__dirname}/URL/price_two.csv`;

// -01
// require fs module
const fs = require('fs'),

      // typical csvtojson stuff, as outlined in the readme file
      Converter = require('csvtojson').Converter,
      converter = new Converter({}),

     // new conversion function
     // takes a file
     // returns a promise
      convertToJson = function(file) {
        return new Promise( (res, rej) => {
          converter.on("end_parsed", (jsonData) => {
            if(!jsonData){
              rej("CSV to JSON conversion failed!")
            }
            res(jsonData);
          });
          fs.createReadStream(file).pipe(converter);
        });
      };

export default convertToJson;

      // ...and you can use this promise like so:
    //   convertToJson( URL_01 )
    //     // handle the successful data conversion
    //     .then( data => {
    //       console.log(data);
    //     })
    //     // handle a rejected promise
    //     .catch( console.warn );

// // 00
// // require the csvtojson converter class 
// var Converter = require("csvtojson").Converter;
// // create a new converter object
// var converter = new Converter({});

// // call the fromFile function which takes in the path to your 
// // csv file as well as a callback function
// export default function toJson () {
//     converter.fromFile(URL_01 ,function(err,result){
//     // if an error has occured then handle it
//     if(err){
//         console.log("An Error Has Occured");
//         console.log(err);  
//     } 
//     // create a variable called json and store
//     // the result of the conversion
//     console.log(result);
//     return 'as';
//     // log our json to verify it has worked
 
// })

// }
// // 01
// const request=require('request');
// const csv=require('csvtojson');

// csv()
// .fromStream(request.get('https://niko-opt.com/price_two.csv'))
// .on('csv', (csvRow) => {
//     const jsonStr= csvRow.toString('utf8')
// 	console.log(jsonStr);
// })
// .on('done', (error) => {

// });

// //02
// var csvjson = require('csvjson');
// var fs = require('fs');

// var options = {
//     delimiter : ',' , // optional
//     quote     : '"' // optional
// };

// var file_data = fs.readFileSync(__dirname + '/price_two.csv', { encoding : 'utf8'});
// var result = csvjson.toObject(file_data, options);
// console.log(result); //Converted json object from csv data
