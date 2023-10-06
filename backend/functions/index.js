const cors = require("cors");
const { setGlobalOptions } = require("firebase-functions/v2");
setGlobalOptions({ maxInstances: 10 });

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

app.use(cors());
app.use(express.json());
const mongoUrl =
  process.env.mongoUrl ||
  "mongodb+srv://yp007:1234@cluster0.tqw9k1q.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to databse");
  })
  .catch((e) => console.log(e));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}
require("./userDetails");

const User = mongoose.model("UserInfo");
app.post("/register", async (req, res) => {
  const { name, phone, email, language, date, location } = req.body;
  try {
    await User.create({
      name,
      phone,
      email,
      language,
      date,
      location,
    });
    res.send({ status: "Ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.get("/getAllUser", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send({ status: "OK", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

require("./classroomInfo");
const classrooms = mongoose.model("classroom");

app.post("/allocateClassrooms", async (req, res) => {
  try {
    const users = await User.find({ classroomId: { $exists: false } });
    const classroom = await classrooms.find({});

    console.log(users.length);

    users.forEach(async (user) => {
      for (let cls of classroom) {
        if (
          cls.location === user.location &&
          (!cls.languageRequirement.length ||
            user.language.some((lang) =>
              cls.languageRequirement.includes(lang)
            )) &&
          cls.remainingreq > 0
        ) {
          cls.remainingreq -= 1;
          console.log(
            { _id: user._id.toHexString() },
            { $set: { classroomId: cls.classroomID } }
          );
          const result = await User.updateOne(
            { _id: user._id },
            { $set: { classroomId: cls.classroomID } },
            { w: 1 }
          );
          await classrooms.updateOne(
            { _id: cls._id },
            { $set: { remainingreq: cls.remainingreq } },
            { w: 1 }
          );
          console.log(result);
          break;
        }
      }
    });
    {
      res.send({ status: "Ok" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
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
