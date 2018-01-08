import mongoose from 'mongoose';
import _ from 'lodash';

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
},
  {
    timestamps: true,
  });

// дополнительный метод который прописываем не требует доп подключения

UserSchema.methods.toJSON = function () {
  return _.pick(this, ['name']);
};

export default mongoose.model('User', UserSchema);

