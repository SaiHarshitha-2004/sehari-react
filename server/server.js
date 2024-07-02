import express from 'express';
import { mongoose } from 'mongoose';
import cors from "cors";
import {USERNAME , DATABASE_NAME  , PASSWORD  } from "./config.js"
import bcrypt from "bcryptjs";
import bestVenues from './Models/VenueSchema.js';
import icons from './Models/IconSchema.js';
import User from './Models/LoginSchema.js';
import cookieSession from 'cookie-session';


const app = express();

app.use(express.json( { extended : false }));
app.use(
  cookieSession({ name: "session", keys: ["sehari"], maxAge: 24 * 60 * 60 * 100 })
);


// const corsOptions = {
//     origin : 'http://localhost:5173',
//   methods : "GET , POST , PUT , DELETE",
//   credentials : true,
// };

// app.use(cors(corsOptions));
app.use(cors());

const PORT = process.env.PORT || 8000;

const uri =  `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.wevnywk.mongodb.net/`

mongoose.connect( `${uri}${DATABASE_NAME}` )
.then(async () => {
  const db = mongoose.connection.useDb(DATABASE_NAME)
  const collection = db.collection("users");
  
  console.log(`Connected to MongoDB database: ${DATABASE_NAME}`);
 
})
.catch(
  (e) => console.error(e)
)
app.get("/" , (req , res) => {
  res.json("hello") 
})

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



//login route 
app.post("/database/login" , async (req , res) => {
  try {
    const {email , password} = req.body ; 

    if(!email || !password) {
      return res.status(409).json({message : "Email and password is required"})
    }

    const existingUser = await User.findOne( { email} );

    if(!existingUser || !(await bcrypt.compare(password, existingUser.password)) ){
      return res.status(401).json({ message: 'Invalid email or password' });

    }
    res.json({message : "Login successfull !"}) ; 
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

// app.use("/auth" , router )

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 
