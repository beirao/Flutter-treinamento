import Image from "next/image";
import Topic from "../components/Topic";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen mt-10">
      <div className="grid place-items-center">
        <div className="grid grid-cols-1 gap-7 place-items-left text-slate-700 max-w-3xl mx-5">
          <p className="font-semibold text-2xl text-slate-800">
            Instalação do Flutter para Windows
          </p>
          <Topic
            title={"Instalação do git"}
            text={"Primeiro precisamos do Git para instalar o Flutter. "}
            linkName={"Baixar Git"}
            link={"https://git-scm.com/download/win"}
            imagePath={"/gitdl.png"}
          />
          <Topic
            title={"Obtenha o Flutter SDK"}
            text={
              "Na página de instalação Flutter for Windows, clique no botão azul."
            }
            linkName={"Baixar SDk"}
            link={"https://docs.flutter.dev/get-started/install/windows"}
            imagePath={"/sdkflutter.png"}
          />
          <Topic
            title={"Adicionar o SDK Flutter ao path"}
            text={`Na verdade, SDK significa Software Development Kit e é um conjunto de ferramentas, incluindo bibliotecas e documentação, necessárias para desenvolver aplicações. O Flutter SDK nos permite criar aplicações web, móveis e desktop a partir de uma única base de código.`}
          />
          <Topic
            text={`Uma vez concluído o download, extrair o arquivo zip e colocá-lo na pasta ou local de instalação desejado, por exemplo, "C: /flutter". No entanto, não o coloque em "arquivos de programas", pois esta pasta necessita de privilégios elevados.`}
          />
          <Topic
            text={
              'Para executar o comando Flutter no console do Windows, é necessário atualizar o caminho do sistema para incluir o diretório Flutter bin. Na barra de busca, digite "env", navegue para mudar as variáveis de ambiente.'
            }
            imagePath={"/env.webp"}
          />

          <Topic
            text={
              'Em seguida, clique em "Variável ambiental". Nos parâmetros do usuário você deve ter a variável Path. Caso não o tenha, você pode criá-lo com o novo botão, caso contrário, clique em modificar.'
            }
            imagePath={"/path.webp"}
          />
          <Topic
            text={
              "Em seguida, clique em novo para incluir o caminho para a pasta do lixo."
            }
            imagePath={"/path1.webp"}
          />
          <Topic
            title={"Executar Flutter Doctor"}
            text={
              "O Flutter doctor diz se todas as dependências do Flutter estão instaladas ou se algumas precisam ser instaladas."
            }
            imagePath={"/doctor.png"}
            code={`flutter doctor`}
          />
          <Topic
            text={
              "Você verá que há um problema, o Android SDK não está instalado."
            }
          />
          <Topic
            title={"Configuração do Android SDK"}
            text={`Você instalará o Android Studio e configurará o Android SDK.
            Portanto, baixe o Android Studio como um arquivo zip ou arquivo executável a partir do site oficial.`}
            linkName={"Baixar Android Studio"}
            link={"https://developer.android.com/studio"}
            imagePath={"/studio.png"}
          />
          <Topic
            title={"Verificação da instalação de Flutter"}
            text={
              "Abra o prompt de comando e execute o comando abaixo para verificar se tudo está instalado corretamente."
            }
            imagePath={"/ok.png"}
            code={`flutter doctor -v`}
          />
          <div className="flex flex-col max-w-3xl items-center">
            <Link href="/tuto">
              <button className="mt-7 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-4 rounded-2xl text-white text-xl">
                🥰 🎉🎉 COMEÇAR A CODIFICAR !!!!!! 🎉🎉 🥰
              </button>
            </Link>
          </div>
          {/* <Topic
            title={"test"}
            text={"test"}
            linkName={"test"}
            link={"test"}
            imagePath={"test"}
            code={`test`}
          /> */}

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
