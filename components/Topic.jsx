import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function Topic({ title, text, code, videoLink }) {
  return (
    <div className="flex flex-col max-w-3xl">
      <p className="font-semibold indent-8 my-3 text-xl text-slate-700">
        {title}
      </p>
      <p className="indent-4">{text ? text : ""}</p>

      {code ? (
        <SyntaxHighlighter language="Javascript" style={docco} className="m-4">
          {code}
        </SyntaxHighlighter>
      ) : (
        ""
      )}
      <div className="items-center justify-center">
        {videoLink ? (
          <iframe
            className="min-mx-5 mt-4 mx-auto"
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
    </div>
  );
}
