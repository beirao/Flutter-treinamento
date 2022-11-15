import { Button, Input } from "@web3uikit/core";
import { authOptions } from "../api/auth/[...nextauth].js";
import { unstable_getServerSession } from "next-auth/next";
import { useState } from "react";
import { useNotification } from "@web3uikit/core";

export const getServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callback=" + process.env.HOST + "/user/addTopic",
        permanent: false,
      },
    };
  }

  return { props: { session } };
};

export default function addTopic({ topics }) {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [text, setText] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const dispatch = useNotification();

  function handleNewNotification() {
    dispatch({
      type: "success",
      message: title,
      title: "Tópico enviado",
      position: "topR",
    });
  }

  const handleSumbit = async () => {
    document.getElementById("title").value = "";
    document.getElementById("text").value = "";
    document.getElementById("code").value = "";
    document.getElementById("video_link").value = "";

    handleNewNotification();

    const response = fetch("/api/postTopic", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        code: code,
        text: text,
        videoLink: videoLink,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const data = await response.json();

    console.log("data :", response);
  };

  return (
    <div className="min-h-screen mt-2">
      <div className="grid place-items-center">
        <div className="grid grid-cols-1 gap-7 place-items-left text-slate-700 max-w-3xl ">
          <p className="text-sm mr-100"> </p>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <p className="text-2xl ml-3 mt-3 font-semibold">
              Adicionar um tópico
            </p>
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="col-span-6">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Título
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="title"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Texto descritivo
                </label>
                <div className="mt-1">
                  <textarea
                    id="text"
                    name="text"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="video_link"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Vídeo do Youtube com o <a className="font-bold">/embed/</a>{" "}
                    tag
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                      Youtude{" "}
                    </span>
                    <input
                      type="text"
                      name="video_link"
                      id="video_link"
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="https://www.youtube.com/embed/_IkbqSCIyYk"
                      onChange={(e) => setVideoLink(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Código
                </label>
                <div className="mt-1">
                  <textarea
                    id="code"
                    name="code"
                    rows={8}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={handleSumbit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function addTopic({ topics }) {

//   return (
// <div className="min-h-screen mt-2">
//   <div className="grid place-items-center">
//     <div className="grid grid-cols-1 gap-7 place-items-left text-slate-700 max-w-3xl ">
//       <p className="text-sm mr-100"> </p>

//           <Input
//             className="place-content-end justify-end"
//             label="Buscar"
//             name="Buscar"
//             width="120px"
//             onBlur={function noRefCheck() {}}
//             onChange={function noRefCheck() {}}
//           />
//           <Input
//             className="place-content-end justify-end"
//             label="Buscar"
//             name="Buscar"
//             width="120px"
//             onBlur={function noRefCheck() {}}
//             onChange={function noRefCheck() {}}
//           />
//           <Button
//             onClick={function noRefCheck() {}}
//             text="Add"
//             theme="primary"
//             size="large"
//             disabled={status == "authenticated" ? false : true}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
