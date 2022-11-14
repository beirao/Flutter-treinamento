import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("flutter");

    const topics = await db.collection("topics").find({}).toArray();

    res.status(200).json(topics);
  } catch (e) {
    res.status(401).json({ error: "Error during the query" });
  }
};
