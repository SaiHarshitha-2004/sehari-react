import express from 'express';
import { mongoose } from 'mongoose';
import cors from "cors";

const app = express();
app.use(express.json( { extended : false }));

const corsOptions = {
  origin : 'http://localhost:5173',
  credentials : true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

const uri = "mongodb+srv://saiharshithamandapalli:Harshitha@cluster0.wevnywk.mongodb.net/";

const dbName = "sehariDatabase";
const collectionName = "users";

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
app.post('/api/sehariDatabase/users', async (req, res) => {
  try {
    const {email , password} = req.body ;
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const newUser = await User.create({
      email , password 
    })

    console.log("USER DATA " , newUser);

    res.status(200).json({ message: 'User created successfully' });
  } 
  catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get("/api/sehariDatabase/users" , async (req , res ) => {
  try{
     const usersData = await User.find();
     res.status(200).json(usersData);
  }
  catch (error) {
    console.error("Error fetching data", error);
    res.status(500).json({ message: "Error fetching data", error });
}
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 
