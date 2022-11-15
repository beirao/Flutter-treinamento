import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("flutter");
    const { search } = req.query;

    const topics = await db
      .collection("topics")
      .find({ title: search, show: 1 })
      .toArray();

    res.status(200).json(topics);
  } catch (e) {
    res.status(401).json({ error: "Error during the query" });
  }
};
