import { Button } from "@web3uikit/core";
import Image from "next/image";

import { useSession } from "next-auth/react";

export const getServerSideProps = async (context) => {
  // const req = await fetch(
  //   process.env.HOST + "/api/getUserTopics?email=" + session.user.email
  // );
  // const topics = await req.json();

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination:
  //         "/api/auth/signin?callback=" + process.env.HOST + "/user/showMyTopic",
  //       permanent: false,
  //     },
  //   };
  // }

  return { props: { session } };
};

export default function CompactTopic({
  _id,
  userId,
  title,
  text,
  imagePath,
  author,
}) {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col rounded-lg bg-slate-50 p-2 hover:bg-slate-100">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-between mb-2">
          <p className="font-semibold text-slate-700 hover:underline text-lg">
            {title}
          </p>
          <p className="font-bold text-slate-500  text-sm">{author}</p>
          <hr className="my-2 w-36" />
        </div>
        {session?.user?.email == userId ? (
          <button className="hover:bg-slate-300 active:bg-slate-400 rounded p-1 my-6 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        ) : (
          ""
        )}
      </div>

      {text ? text.slice(0, 200) : ""}
      {"..."}

      {imagePath ? (
        <Image
          className="mt-6 shadow-md self-center"
          src={imagePath}
          width="550"
          height="400"
          alt="BoarBet Logo"
        />
      ) : (
        ""
      )}

      {/* <hr className="my-6" /> */}
    </div>
  );
}
