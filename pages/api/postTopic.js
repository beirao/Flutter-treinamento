import clientPromise from "../../lib/mongodb";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    try {
      if (req.method === "POST") {
        const client = await clientPromise;
        const db = client.db("flutter");

        const data = req.body;
        console.log("dataaaa : ", data);

        await db.collection("topics").insertOne({
          userId: session.user.email,
          author: session.user.name,
          show: 1,
          title: data.title,
          code: data.code,
          videoLink: data.videoLink,
          text: data.text,
          link: "",
          linkName: "",
        });
      }
    } catch (e) {
      res.status(401).json({ error: "Error during the query" });
    }
  } else {
    res.status(401).json({ error: "Unauthenticated user" });
  }
};
