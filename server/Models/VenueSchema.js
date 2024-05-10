import { mongoose } from 'mongoose';

const venueSchema = new mongoose.Schema({
    name: String,
    bgImage: String,
    address: String,
    country: String,
    website: String,
    image : String
  });   
const bestVenues = mongoose.model('bestVenues', venueSchema);
export default bestVenues;
