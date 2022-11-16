import clientPromise from "../../lib/mongodb";
import { getSession } from "next-auth/react";
import { ObjectId } from "mongodb";
import { Data } from "@web3uikit/icons";

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    try {
      if (req.method === "POST") {
        const client = await clientPromise;
        const db = client.db("flutter");

        const data = req.body;

        const topic = await db
          .collection("topics")
          .findOne({ _id: ObjectId(data._id), show: 1 });

        if (session.user.email == topic.userId) {
          await db.collection("topics").updateOne(
            {
              _id: ObjectId(data._id),
              show: 1,
            },
            { $set: { show: 0 } }
          );
        }
      }
    } catch (e) {
      res.status(401).json({ error: "Error during the query" });
    }
  } else {
    res.status(401).json({ error: "Unauthenticated user" });
  }
};
