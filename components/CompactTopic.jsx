import { Button } from "@web3uikit/core";
import Image from "next/image";
import { useSession } from "next-auth/react";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 m-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.867 19.125h.008v.008h-.008v-.008z"
            />
          </svg>
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
