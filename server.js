import express from 'express';
import { mongoose } from 'mongoose';
import cors from "cors";
import {USERNAME , BASE_URL , PASSWORD  } from "../sehari-react/config.js";
import bcrypt from "bcryptjs";
import  cheerio  from 'cheerio';
import fs  from 'fs';
import nodemailer from 'nodemailer';
import { error, log } from 'console';
import crypto from 'crypto';
import Token from "./src/Models/token.js"
import SendMail from "./src/Utils/SendMail.js"

const app = express();
const router = express.Router();

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
  password: String,
  verified : {type : Boolean , default : false}
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

    let existingUser = await User.findOne({email});
    if(existingUser){
      return res.status(409).json({message : "email already exits"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    existingUser = await User.create({
      email : email , 
      password : hashedPassword 
    })

    console.log("USER DATA ", existingUser);

    const token = await new Token({
      userId : existingUser._id ,
      token : crypto.randomBytes(32).toString('hex')
    }).save();

    const url = `${BASE_URL}signup/${existingUser._id}/verify/${token.token}`
    await SendMail(existingUser.email , "Verify Email" , url) ;
    res.status(200).send({message: 'An email sent to your account please verigy'})
    if(existingUser){
      res.status(200).json({ message: 'Registration has been successfully Please Verify Your email' });
    }
    else{
      res.status(200).json({ message: 'Registration has been failed' });

    }
  } 
  catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// verify emails by links  
router.get("/:id/verify/:token/", async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		await User.updateOne({ _id: user._id, verified: true });
		await token.remove();

		res.status(200).send({ message: "Email verified successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


//login route 
app.post("/database/login" , async (req , res) => {
  try {
    const {email , password} = req.body ; 

    if(!email || !password) {
      return res.status(409).json({message : "Email and password is required"})
    }

    const existingUser = await User.findOne( { email} );

    if(!existingUser || !(await bcrypt.compare(password, exitingUser.password)) ){
      return res.status(401).json({ message: 'Invalid email or password' });

    }
    if(!existingUser.verified){
      let token =await Token.findOne({ userId : existingUser._id }) ;
        if(!token){
           token = await new Token({
            userId : existingUser._id ,
            token : crypto.randomBytes(32).toString('hex')
          }).save();
      
          const url = `${BASE_URL}signup/${existingUser._id}/verify/${token.token}`
          await SendMail(existingUser.email , "Verify Email" , url) ;
        }
        return res.status(401).send({ message: 'An email has sent please verify' });
    res.json({message : "Login successfull !"}) ; 
  }

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