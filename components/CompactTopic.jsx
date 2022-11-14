import Image from "next/image";
import { useState, useRef } from "react";

export default function CompactTopic({ title, text, imagePath, author }) {
  return (
    <div className="flex flex-col rounded-lg bg-slate-50 p-2 hover:bg-slate-100">
      <div className="flex flex-row justify-between mb-2">
        <p className="font-semibold text-slate-700 hover:underline ">{title}</p>
        <p className="font-bold text-slate-500  ">{author}</p>
      </div>
      {text ? text.slice(0, 220) : ""}
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
