import { mongoose } from "mongoose";

const iconSchema = new mongoose.Schema({
    name: String,
    bgImage: String,
  })
  
  
  const icons = mongoose.model('icons', iconSchema);

  export default icons ;