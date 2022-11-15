import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("flutter");

    const { topicId } = req.query;
    console.log(topicId);

    const topics = await db.collection("topics").findOne(ObjectId(topicId));

    res.status(200).json(topics);
  } catch (e) {
    res.status(401).json({ error: "Error during the query" });
  }
};
