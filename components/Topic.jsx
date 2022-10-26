import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function Topic({ title, text, code, videoLink }) {
  return (
    <div>
      <p
        className="text-left"
        style={{
          width: "760px",
        }}
      >
        <p className="font-semibold indent-8 my-3 text-xl text-slate-700">
          {title}
        </p>
        {text ? text : ""}
        {code ? (
          <SyntaxHighlighter
            language="Javascript"
            style={docco}
            className="m-4"
          >
            {code}
          </SyntaxHighlighter>
        ) : (
          ""
        )}
      </p>

      {videoLink ? (
        <iframe
          className="mt-6"
          width="760"
          height="500"
          src={videoLink}
          frameborder="0"
          allowfullscreen
        ></iframe>
      ) : (
        ""
      )}

      {/* <hr /> */}
    </div>
  );
}
