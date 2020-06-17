const express = require("express");
const bodyParser = require("body-parser");

const placesroutes = require("./routes/places-routes");

const app = express();

app.use("/api/places", placesroutes);

app.listen(5000);
