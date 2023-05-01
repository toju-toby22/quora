import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";


// routes
import AuthRoute from './routes/auth.js'
import UserRoute from './routes/users.js'
import PostRoute from './routes/posts.js'
import UploadRoute from './routes/UploadRoute.js'
// import ChatRoute from './routes/ChatRoute.js'
// import MessageRoute from './routes/MessageRoute.js'

const app = express();


// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());





// to serve images inside public folder
app.use(express.static('public')); 
app.use('/images', express.static('images'));


dotenv.config();


//local server config
// mongoose.connect("mongodb://localhost/quoraservr_db",
//     { useNewUrlParser: true, useUnifiedTopology: true, family: 4 },
//     err => {
//         if (err) throw err;
//         console.log("db connected")
//         // finds a database called website_db, if it does not exist. it will create the datatbase it self
//     });
// mongoose.Promise = global.Promise;

// const port = 3024
// app.listen(port, () => {
//     console.log(`Running ${port}`) 
// })



//routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute)
app.use('/posts', PostRoute)
app.use('/upload', UploadRoute)
// app.use('/chat', ChatRoute)
// app.use('/message', MessageRoute)



const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));


// const PORT = process.env.PORT;

// const CONNECTION =process.env.MONGODB_URL;
// mongoose
//   .connect(CONNECTION, { 
//     useNewUrlParser: true,
//      useUnifiedTopology: true 
//     }) .then(() => {app.listen(PORT, () => console.log(`Listening at Port ${PORT}`))})
//   .catch((error) => console.log(`${error} did not connect`));
