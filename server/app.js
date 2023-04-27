// declarations
require('dotenv').config()
const { ENVIRONMENT, PORT } = process.env;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

//middleware setup
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// routes import
const productRouter = require("./routes/productRoutes.js");

routes
app.use("/api/product", productRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});