import express from 'express';
import { mongoose } from 'mongoose';
import cors from "cors";
import {USERNAME , PASSWORD} from "../sehari-react/config.js";
import bcrypt from "bcryptjs";
import  cheerio  from 'cheerio';
import fs  from 'fs';

const app = express();
app.use(express.json( { extended : false }));

const dbName = "sehariDatabase";
const collectionName = "users";


const corsOptions = {
  origin : 'http://localhost:5173',
  credentials : true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

const uri =  `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.wevnywk.mongodb.net/`


const venueSchema = new mongoose.Schema({
  name: String,
  bgImage: String,
  address: String,
  country: String,
  website: String,
  image : String
}); 

const iconSchema = new mongoose.Schema({
  name: String,
  bgImage: String,
})


const userSchema = new mongoose.Schema({
  email: String , 
  password: String
});

const User = new mongoose.model(collectionName , userSchema);
const bestVenues = mongoose.model('bestVenues', venueSchema);
const icons = mongoose.model('icons', iconSchema);

mongoose.connect( `${uri}${dbName}` )
.then(async () => {
  // Get a reference to the database and collection
  const db = mongoose.connection.useDb(dbName)
  const collection = db.collection(collectionName);
  
  console.log(`Connected to MongoDB database: ${dbName}, collection: ${collectionName}`);
 
  //bestVenues data scrapping from prestigious.com website

  /*const html = fs.readFileSync('./src/Data/events.html', 'utf8');

  // Load the HTML into Cheerio
  const $ = cheerio.load(html);

  // Extract data from the HTML
  const iconsData = $('.category-cover a').map((_, element) => {
    const $element = $(element);
    const name = $element.find('a .category-text').text().trim();
    const bgImage = $element.find('.category-icon svg');
  
    return {
      name,
      bgImage,
    };
  }).get();

  // Insert venue data into MongoDB venues collection

  await icons.insertMany(iconsData);
  console.log(`${iconsData.length} documents inserted into MongoDB`);*/

})
.catch(
  (e) => console.error(e)
)


// Signup route
app.post('/database/signup', async (req, res) => {

  try {
    const {email , password} = req.body ;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const exitingUser = await User.findOne({email});
    if(exitingUser){
      return res.status(409).json({message : "email already exits"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email : email , 
      password : hashedPassword 
    })

    console.log("USER DATA ", newUser);

    res.status(200).json({ message: 'User created successfully' });
  } 
  catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

//login route 
app.post("/database/login" , async (req , res) => {
  try {
    const {email , password} = req.body ; 

    if(!email || !password) {
      return res.status(409).json({message : "Email and password is required"})
    }

    const exitingUser = await User.findOne( { email} );

    if(!exitingUser || !(await bcrypt.compare(password, exitingUser.password)) ){
      return res.status(401).json({ message: 'Invalid email or password' });

    }

    res.json({message : "Login successful"}) ; 

  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
})

app.get("/database/bestvenues" ,  async (req , res ) => {
    try {
       const venues = await bestVenues.find() ; 
       res.json(venues);
    } catch (error) {
      res.status(500).json( { message : "Error in fetching data" } );
    }
})

app.get("/database/venuesiconsdata" ,  async (req , res ) => {
  try {
     const result = await icons.find() ; 
     res.json(result);
  } catch (error) {
    res.status(500).json( { message : "Error in fetching data" } );
  }
})  
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 