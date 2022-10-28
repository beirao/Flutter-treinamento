import Topic from "../components/Topic";

export default function Home() {
  return (
    <div className="min-h-screen mt-10">
      <div className="grid place-items-center">
        <div className="grid grid-cols-1 gap-7 place-items-left text-slate-700 max-w-3xl mx-5">
          <Topic
            title={"Criação de um projeto"}
            text={
              "Neste vídeo veremos como criar um projeto Flutter a partir do Visual Studio Code."
            }
            videoLink={"https://www.youtube.com/embed/_IkbqSCIyYk"}
          />
          <Topic
            title={"Configuração do Android Studio"}
            text={
              "Neste segundo vídeo veremos como configurar um emulador android para nosso projeto Flutter."
            }
            videoLink={"https://www.youtube.com/embed/CEf5jHs3QeQ"}
          />
          <Topic
            title={"Abrir emulador no VSCode"}
            text={
              "Neste terceiro vídeo veremos como executar nosso projeto a partir do Visual Studio Code com nosso emulador"
            }
            videoLink={"https://www.youtube.com/embed/IaamDZsXUbU"}
          />

          <p>
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
