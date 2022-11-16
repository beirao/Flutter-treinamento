import CompactTopic from "../../components/CompactTopic";
import { Button, Input } from "@web3uikit/core";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth].js";
import { unstable_getServerSession } from "next-auth/next";
import { useState } from "react";
import { useNotification } from "@web3uikit/core";

export const getServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  const req = await fetch(
    process.env.HOST + "/api/getUserTopics?email=" + session.user.email
  );
  const topics = await req.json();

  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callback=" + process.env.HOST + "/user/showMyTopic",
        permanent: false,
      },
    };
  }

  return { props: { session, topics } };
};

export default function blog({ session, topics }) {
  function handleNewNotification(title) {
    dispatch({
      type: "success",
      message: title,
      title: "Tópico enviado",
      position: "topR",
    });
  }

  return (
    <div className="min-h-screen mt-2">
      <div className="grid place-items-center">
        <div className="grid grid-cols-1 gap-7 place-items-left text-slate-700 max-w-3xl ">
          <p className="mr-100"></p>
          <p className="text-3xl font-bold ml-5">Seu topics</p>
          <hr className="mx-3" />
          {console.log(topics)}
          {topics.map((topic, index) => {
            const { _id, userId, author, title, text } = topic;
            return (
              <Link href={`/topic/${_id.toString()}`} key={_id.toString()}>
                <div className="mx-5">
                  <CompactTopic
                    _id={_id}
                    userId={userId}
                    author={author}
                    title={title}
                    text={text}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
