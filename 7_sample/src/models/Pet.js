import mongoose from 'mongoose';
import _ from 'lodash';

const { Schema } = mongoose;

const PetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['cat', 'dog'],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
},
  {
    timestamps: true,
  });

// дополнительный метод который прописываем не требует доп подключения
PetSchema.methods.toJSON = function () {
  return _.pick(this, ['name', 'type', 'owner']);
};

export default mongoose.model('Pet', PetSchema);

