const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://cSc590:ehHsu3NViHPgLvWX@cluster0.ueyan8p.mongodb.net/test";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("TEST1");
    const coll = db.collection("ratings_reviews");

    // insert code goes here
    const docs = [
      {
        rating: "5",
        review: "GReat!",
        short_title: "SOME ART CLASS",
        course_no: "ART*200"
      }
    ]

    const result = await coll.insertMany(docs);

    // display the results of your operation
    console.log(result.insertedIds);
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
