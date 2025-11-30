const express = require("express");
var cors = require("cors");
const app = express();
// Dot env
require("dotenv").config();

// MongoDB
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = process.env.port || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection string
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.16vdity.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// MongoDBConnection

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);
// *************************************
// 1. Once this steps are done go to Database & Network Access and create a user + Give a role to the user + copy the user's username&password
// 2.

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
