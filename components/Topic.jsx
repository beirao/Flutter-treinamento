import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Image from "next/image";
import { useState, useRef } from "react";
import { useSession } from "next-auth/react";

export default function Topic({
  title,
  author,
  userId,
  text,
  code,
  link,
  linkName,
  imagePath,
  videoLink,
}) {
  const [btnCopyFocus, setBtnCopyFocus] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="flex flex-col max-w-4xl">
      <div className="flex flex-row justify-between">
        {title ? (
          <p className="font-semibold indent-8 my-3 text-2xl text-slate-700">
            {title}
          </p>
        ) : (
          ""
        )}
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
      {author ? <p className="indent-8 text-slate-700">{author}</p> : ""}
      <hr className="my-4" />

      <p className="indent-4">
        {text ? text : ""}{" "}
        {link && linkName ? (
          <a
            className="text-blue-600 hover:text-blue-500 underline"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {linkName}
          </a>
        ) : (
          ""
        )}
      </p>

      <div className="items-center justify-center">
        {videoLink ? (
          <iframe
            className="my-4 mx-auto"
            width="80%"
            height="400px"
            src={videoLink}
            frameBorder="0"
            allowFullScreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          />
        ) : (
          ""
        )}
      </div>
      {code ? (
        <div>
          <div className="relative mt-2">
            <button
              onFocus={() => setBtnCopyFocus(true)}
              onBlur={() => setBtnCopyFocus(false)}
              className="absolute top-0 right-0 opacity-50 p-2 text-sm hover:bg-cyan-400 focus:bg-sky-500 bg-slate-400 rounded-bl-xl text-white "
              onClick={() => {
                navigator.clipboard.writeText(code);
              }}
            >
              {btnCopyFocus ? "Copied" : "Copy"}
            </button>
          </div>
          <SyntaxHighlighter language="Javascript" style={docco} className="">
            {code}
          </SyntaxHighlighter>
        </div>
      ) : (
        ""
      )}
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
    </div>
  );
}
