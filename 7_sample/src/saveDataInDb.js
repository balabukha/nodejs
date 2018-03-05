import NikoOptSchema from './models/nikoOptSchema';


export default async function saveDataInDb(data) {
  try {
    const promises = data.map((item) => {
      const itemData = Object.assign({}, item);
      return (new NikoOptSchema(itemData)).save();
    });
    console.log('OK');
    return {
      item: await Promise.all(promises),
    };
  } catch (err) {
    console.log('err', err);
    throw err;
  }
}
