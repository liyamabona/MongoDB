const express = require("express");
require('dotenv').config()
const cors = require("cors");
const app = express();
const initRoutes = require("./routes/user.routes")
const PORT = process.env.PORT;

const DB = require("./config/db.config")
const db = require('./models')

//var cors0ptions = {
// origin: "http://localhost:8081"
// };

//app.use(cors(cors0ptions));


// app.use(express.json());


// app.use(express.urlencoded({extended: true, limit: '50mb'}));

db.mongoose.connect(DB.db_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(console.log("Connected successfully"))
  .catch(err=>{console.log("Ërror message : " + err)})

initRoutes(app)

app.listen(process.env.PORT, () => {
    console.log(`Server is running @ ${PORT}.`);
});