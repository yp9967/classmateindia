const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 5000;
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoUrl = process.env.mongoUrl || "mongodb+srv://yp007:1234@cluster0.tqw9k1q.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to databse");
  })
  .catch((e) => console.log(e));

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
app.listen(PORT, () => {
    console.log("server started");
  });