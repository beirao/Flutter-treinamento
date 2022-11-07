import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Image from "next/image";

export default function Topic({
  title,
  text,
  code,
  link,
  linkName,
  imagePath,
  videoLink,
}) {
  return (
    <div className="flex flex-col max-w-3xl">
      {title ? (
        <p className="font-semibold indent-8 my-3 text-xl text-slate-700">
          {title}
        </p>
      ) : (
        ""
      )}
      <p className="indent-4">
        {text ? text : ""}{" "}
        {link && linkName ? (
          <a
            className="text-blue-600 hover:text-blue-500 underline"
            href={link}
            target="_blank"
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
            className="mt-4 mx-auto"
            width="80%"
            height="400px"
            src={videoLink}
            frameborder="0"
            allowfullscreen="allowfullscreen"
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
        <SyntaxHighlighter language="Javascript" style={docco} className="m-4">
          {code}
        </SyntaxHighlighter>
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
