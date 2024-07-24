// import axios from "axios";

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middle wares
app.use(express.json());
app.use(cors());  

//Currencies
app.get("/getAllCurrencies", async(req,res) => {
    const nameURL = "https://openexchangerates.org/api/currencies.json?app_id=4d5665be143a4bfba461c9c6eba6ee99";

    try{
        const namesResponce = await axios.get(nameURL);
        const nameData = namesResponce.data;
    
        return res.json(nameData);
    }catch(err){
        console.error(err);
    }
});

//listen to a part
app.listen(5000, () => {
    console.log("SERVER STARTED");
})