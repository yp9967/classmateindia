/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const {setGlobalOptions} = require("firebase-functions/v2");
setGlobalOptions({maxInstances: 10});


const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
// const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const mongoUrl = process.env.mongoUrl || "mongodb+srv://yp007:1234@cluster0.tqw9k1q.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to databse");
  })
  .catch((e) => console.log(e));
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
}
require("./userDetails");

const User = mongoose.model("UserInfo");
app.post("/register", async (req,res) => {
    const { name, phone, email, language, date, location} = req.body;
    try {
        await User.create({
            name,
            phone,
            email,
            language,
            date,
            location
        });
        res.send({status: "Ok"});
    } catch (error) {
        res.send({status: "error"});
        
    }
})




app.get("/", (req,res) => {
    // res.send("Hi");
    res.status(200).send('OK');
});

app.get("/getAllUser", async (req,res) => {
  try {
    const allUser=await User.find({});
    res.send({status:"OK", data:allUser});
    
  } catch (error) {
    console.log(error);
    
  }
});

app.use(express.static(path.join(__dirname, "frontend", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});
// app.listen(() => {
//     console.log("server started");
//   });

exports.app = onRequest(app);