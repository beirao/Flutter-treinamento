import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen mt-10">
      <div className="grid place-items-center">
        <div className="grid grid-cols-1 gap-7 place-items-center  text-slate-700 mx-2 max-w-3xl">
          <div markdown="1">Have **fun!**</div>
          <p>
            <br />
            <br />
            <br />{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
