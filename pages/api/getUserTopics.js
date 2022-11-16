import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  const { email } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db("flutter");

    const topics = await db
      .collection("topics")
      .find({
        show: 1,
        userId: email,
      })
      .toArray();

    res.status(200).json(topics);
  } catch (e) {
    res.status(401).json({ error: "Error during the query" });
  }
};
