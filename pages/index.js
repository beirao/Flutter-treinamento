import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen mt-10">
      <div className="grid place-items-center">
        <div className="grid grid-cols-1 gap-7 place-items-center text-slate-700 mx-5 max-w-3xl">
          <p className="font-semibold text-2xl text-black">O que é Flutter?</p>

          <p className="indent-8 ...">
            {" "}
            Flutter é um sistema desenvolvido pelo Google para projetar
            aplicativos multiplataforma para Android, iOS ou Web. Ele usa uma
            linguagem de programação criada pelo Google: Dart. É uma linguagem
            de programação orientada a objetos como Swift ou Kotlin.
          </p>
          <p className="">
            O Flutter permite desenvolver 2 versões de um aplicativo móvel
            (Android e iOS) usando o mesmo código-fonte. Para entender
            completamente o atual ecossistema técnico de aplicativos móveis:{" "}
            <ul className="list-disc pl-10">
              <li className="text-slate-700">
                Aplicativos Android usam as linguagens de programação Kotlin e
                Java
              </li>
              <li className="text-slate-700">
                Aplicativos iOS usam linguagem de programação da Apple: Swift.
              </li>
            </ul>
          </p>
          <p>
            Aplicativos desenvolvidos em Kotlin/Java e Swift são considerados
            “nativos”. O Flutter irá, a partir de seu código Dart, gerar um
            aplicativo nativo.
          </p>

          <Image
            src="/Flutter-explained1.png"
            width="650"
            height="400"
            alt="BoarBet Logo"
          />

          <p className="font-semibold text-2xl text-black">
            Quais são as vantagens e desvantagens ?
          </p>

          <p>
            <p className="indent-8 text-left text-xl text-black">
              Os vantagens :
            </p>
            <br />
            <ul className="list-disc pl-10 text-slate-700">
              <li>
                As técnicas de compilação inteligente do Flutter aumentam a
                velocidade de um aplicativo, melhorando assim os níveis de
                desempenho. Além disso, o uso de widgets torna os aplicativos
                fáceis de usar.
              </li>
              <li>
                Um único código pode ser usado para vários aplicativos,
                reduzindo o tempo de desenvolvimento e acelerando o tempo de
                lançamento no mercado.
              </li>
              <li>
                O recurso Hot Reloading permite que os desenvolvedores de
                aplicativos Flutter vejam instantaneamente as alterações de
                código para refleti-las no aplicativo. Também permite que eles
                corrijam facilmente os bugs.
              </li>
              <li>
                Pode funcionar em vários dispositivos devido à sua boa
                portabilidade.
              </li>
              <li>
                A linguagem utilizada para o desenvolvimento do Flutter é o
                Dart, que pode ser entendido e aprendido com bastante facilidade
                até mesmo por iniciantes.
              </li>
            </ul>
          </p>

          <p>
            <p className="indent-8 text-left text-xl text-black">
              Os desvantagens :
            </p>
            <br />
            <ul className="list-disc pl-10 text-slate-700">
              <li>
                Os serviços de desenvolvimento do Flutter são bastante imaturos
                e têm menos bibliotecas e pacotes necessários para uma
                programação eficiente e não são adequados para grandes
                aplicativos.
              </li>
              <li>
                Como o flutter é multiplataforma, os aplicativos do flutter
                consomem mais espaço de armazenamento no dispositivo.
              </li>
              <li>
                Embora o Dart seja fácil de aprender, poucos desenvolvedores têm
                experiência nessa área.
              </li>
            </ul>
          </p>

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
