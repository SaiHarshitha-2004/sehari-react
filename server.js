import express from 'express';
import { mongoose } from 'mongoose';
import cors from "cors";
import {USERNAME , PASSWORD} from "../sehari-react/config.js";
import bcrypt from "bcrypt";

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

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.wevnywk.mongodb.net/`;


mongoose.connect( `${uri}${dbName}` )
.then(() => {
  // Get a reference to the database and collection
  const db = mongoose.connection.useDb(dbName)
  const collection = db.collection(collectionName);
  
  console.log(`Connected to MongoDB database: ${dbName}, collection: ${collectionName}`);
})
.catch(
  (e) => console.error(e)
)

const userSchema = new mongoose.Schema({
  email: String , 
  password: String
});

const User = new mongoose.model(collectionName , userSchema);

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


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} `);
}); 
