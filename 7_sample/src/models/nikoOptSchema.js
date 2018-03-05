import mongoose from 'mongoose';
// import _ from 'lodash';

const { Schema } = mongoose;

const NikoOptSchema = new Schema({
  Reference: {
    type: String,
    // required: true,
  },
  Name: {
    type: String,
    // required: true,
  },
  Category: {
    type: String,
    // required: true,
  },
  Shortdescription: {
    type: String,
    // required: true,
  },
  Size: {
    type: String,
    // required: true,
  },
  Color: {
    type: String,
    // required: true,
  },
  Structure: {
    type: String,
    // required: true,
  },
  'Price/UAH': {
    type: String,
    // required: true,
  },
  'Price/RUB': {
    type: String,
    // required: true,
  },
  'Price/USD': {
    type: String,
    // required: true,
  },
  URL: {
    type: String,
    // required: true,
  },
  Images: {
    type: String,
    // required: true,
  },
},
  {
    timestamps: true,
  });

// const PetSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     required: true,
//     enum: ['cat', 'dog'],
//   },
//   owner: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//   },
// },
//   {
//     timestamps: true,
//   });

// дополнительный метод который прописываем не требует доп подключения
// PetSchema.methods.toJSON = function () {
//   return _.pick(this, ['name', 'type', 'owner']);
// };

export default mongoose.model('NikoOptSchema', NikoOptSchema);

