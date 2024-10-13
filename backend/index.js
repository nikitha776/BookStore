import {PORT, mongodbURL} from './config.js'
import express from 'express'
import mongoose from 'mongoose'
import {Book} from './models/bookModel.js'
import router from './routes/bookRoutes.js'
import cors from 'cors'

const app = express();

//middleware that parses the incoming request body if it's in JSON
app.use(express.json());

//middleware for handling CORS Policy
//method 1
app.use(cors());
//method 2
// app.use(cors({
//     origin : "http://localhost:3000/",
//     methods : ['GET','POST','PUT','DELETE'],
//     allowedHeaders : ['Content-Type']
// }));

//route for home page
app.get('/',(req,res) => {
    return res.status(234).send("MERN Stack!");
})

app.use('/books',router);

//connecting our to app to database and server
mongoose.connect(mongodbURL).then(() => {
    console.log("App connected to the database");
    app.listen(PORT,() => {
        console.log(`App is listening to the ${PORT}`);
    })
}).catch((err)=>{
    console.log("OOPS! Error occured!");
})
