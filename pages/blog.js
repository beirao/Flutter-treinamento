import { useSession } from "next-auth/react";
import CompactTopic from "../components/CompactTopic";
import { Button, Input } from "@web3uikit/core";
import Link from "next/link";
import { useState } from "react";

export const getServerSideProps = async () => {
  const req = await fetch(process.env.HOST + "/api/getAllTopics");
  const topics = await req.json();
  return { props: { topics } };
};

export default function blog({ topics }) {
  const { data: session, status } = useSession();
  const [stateTopic, setStateTopic] = useState(topics);
  const [searchValue, setSearchValue] = useState(topics);

  const fsearch = async () => {
    const response = await fetch("/api/searchTopics?search=" + searchValue);
    setStateTopic(response);
  };

  return (
    <div className="min-h-screen mt-2">
      <div className="grid place-items-center">
        <div className="grid grid-cols-1 gap-7 place-items-left text-slate-700 max-w-3xl ">
          <p className="text-sm mr-100"> </p>

          <div className="flex flex-row mx-1 ml-2 justify-between">
            <div className="flex">
              <Input
                className="place-content-end justify-end"
                label="Buscar"
                name="Buscar"
                width="120px"
                onBlur={function noRefCheck() {}}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <div className="ml-2 mt-1">
                <Button
                  customize={{
                    backgroundColor: "#9EC7EA",
                    fontSize: 12,
                    onHover: "darken",
                    textColor: "#FFFFFF",
                  }}
                  onClick={function noRefCheck() {}}
                  text="Buscar"
                  theme="custom"
                />
              </div>
            </div>

            <div className="flex flex-col justify-end items-center">
              <Link href="/user/addTopic">
                <Button
                  onClick={function noRefCheck() {}}
                  text="Add"
                  theme="primary"
                  size="large"
                  disabled={status == "authenticated" ? false : true}
                />
              </Link>
              <p className="text-red-400 text-sm ">
                {status == "authenticated" ? "" : "Sign in first"}
              </p>
            </div>
          </div>
          <hr />
          {topics.map((topic, index) => {
            const { _id, userId, author, title, text } = topic;
            return (
              <Link href={`/topic/${_id.toString()}`} key={_id.toString()}>
                <div className="mx-5">
                  <CompactTopic
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
