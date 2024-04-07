const express = require("express");
const cors = require("cors")
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const mj = require('node-mailjet')

const mailjet = mj.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);






app.listen(3000, (err) => console.log(err ? err : "listen on port 3000"));