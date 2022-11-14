import clientPromise from "../../lib/mongodb";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });
  const { title, text, code, link, linkName, videoLink } = req.query;

  if (session) {
    try {
      const client = await clientPromise;
      const db = client.db("flutter");

      await db.collection("topics").insertOne({
        id: session.user.email,
        author: session.user.name,
        title: title,
        text: text,
        code: code,
        link: link,
        linkName: linkName,
        videoLink: videoLink,
      });
    } catch (e) {
      res.status(401).json({ error: "Error during the query" });
    }
  } else {
    res.status(401).json({ error: "Unauthenticated user" });
  }
};
// http://localhost:3000/api/posttopic?title=oui
