import express from "express"
import cors from "cors"
import { mongoClient, MONGODB_COLLECTION } from "./util"

const app = express()

let input = document.getElementById("coursesearch");
let collection = document.getElementsByClassName("courseCard");

app.use(cors({ credentials: true, origin: "http://localhost:4000" }))

app.get("/search", async (req, res) => {
  const searchQuery = input;


  if (!searchQuery || searchQuery.length < 2) {
    res.json([])
    return
  }

  const db = mongoClient.db("classes")
  const collection = db.collection("courseCard")

  const filter = {
    $text: {
      $search: searchQuery,
      $caseSensitive: false,
      $diacriticSensitive: false
    }
  }

})

async function main() {
  try {
    await mongoClient.connect()

    const db = mongoClient.db("classes")
    const collection = db.collection(MONGODB_COLLECTION)

   
    await collection.createIndexes([
        db.classes.createIndex({ course_no: "text"})

    ])

    
  } catch (err) {
    console.log(err)
  }

  process.on("SIGTERM", async () => {
    await mongoClient.close()
    process.exit(0)
  })
}

main()
