// entry point of express server
import express from "express";
import router from "./router/index.js";
import logger from "./middlewere/logger.js";
const app = express();

// middleware
app.use(express.json());
app.use(logger);


// routing
app.use("/api", router);


// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("Welcome to Mamar Dokan!");
});

// app.post('/product', (req, res) => {
//     res.send('Product added successfully!');
// });
// what is API
// API is Application Programming Interface
// API is a set of rules and protocols for building and interacting with software applications.

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
