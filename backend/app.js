import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config("./.env");
import urlSchema from "./src/models/short_url.model.js";
import connectDB from "./src/config/monogo.config.js";
import short_url from "./src/routes/short_url.route.js";
import short_url from "./src/models/short_url.model.js";
import {nanoid} from "nanoid"

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//creation of new short URL
app.post("/api/create", short_url)

//get all short URl
app.get("/:id", async (req, res) => {
    const {id} = req.params;
    const url = await urlSchema.findOne({ short_url: id })
    if (url) {
        res.redirect(url.full_url)
    }else {
        res.status(404).send("URL not found")
    }
})


app.listen(3000,()=>{
    connectDB();
    console.log("server is running on http://localhost:3000");//npx nodemon app.js  or npm run dev
})