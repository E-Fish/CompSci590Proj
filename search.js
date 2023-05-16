import express from "express"
import cors from "cors"
import { mongoClient, MONGODB_COLLECTION } from "./util"

const app = express()

let collection = document.getElementsByClassName("courseCard");

app.use(cors({ credentials: true, origin: "http://localhost:4000" }))

app.get("/search", async (req, res) => {
    const searchQuery = req.query.query
    const country = req.query.country

    if (!searchQuery || searchQuery.length < 2) {
        res.json([])
        return
    }

    const db = mongoClient.db("classes")
    const collection = db.collection(MONGODB_COLLECTION)

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
        { name: "course_no", key: { dept: "text"} }
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