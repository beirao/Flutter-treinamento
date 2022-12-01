import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("flutter");

    const { topicId } = req.query;
    const topic = await db
      .collection("topics")
      .findOne({ _id: ObjectId(topicId), show: 1 });

    res.status(200).json(topic);
  } catch (e) {
    res.status(401).json({ error: "Error during the query" });
  }
};
