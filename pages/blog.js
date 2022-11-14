import { useSession } from "next-auth/react";
import CompactTopic from "../components/CompactTopic";
import { Button, Input } from "@web3uikit/core";

export const getServerSideProps = async () => {
  const req = await fetch(process.env.HOST + "/api/getAllTopics");
  const topics = await req.json();
  return { props: { topics } };
};

export default function blog({ topics }) {
  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen mt-2">
      <div className="grid place-items-center">
        <div className="grid grid-cols-1 gap-7 place-items-left text-slate-700 max-w-3xl mx-5">
          <p className="text-sm mr-100"> </p>

          <div className="flex flex-row mx-1 justify-between">
            <div className="flex">
              <Input
                className="place-content-end justify-end"
                label="Buscar"
                name="Buscar"
                width="120px"
                onBlur={function noRefCheck() {}}
                onChange={function noRefCheck() {}}
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
              <Button
                onClick={function noRefCheck() {}}
                text="Add"
                theme="primary"
                size="large"
                disabled={status == "authenticated" ? false : true}
              />
              <p className="text-red-400 text-sm ">
                {status == "authenticated" ? "" : "Sign in first"}
              </p>
            </div>
          </div>
          <hr />
          {topics.map((topic, index) => {
            const { _id, author, title, text } = topic;
            return (
              <div key={_id.toString()}>
                <CompactTopic author={author} title={title} text={text} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
