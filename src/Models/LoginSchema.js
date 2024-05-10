import { mongoose } from 'mongoose';
import { COLLECTION_NAME } from '../../config.js';

const userSchema = new mongoose.Schema({
    email: String , 
    password: String,
    verified : {type : Boolean , default : false}
  });

const User = new mongoose.model(COLLECTION_NAME , userSchema);

export default User;
