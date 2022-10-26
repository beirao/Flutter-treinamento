import SyntaxHighlighter from "react-syntax-highlighter";
import Topic from "../components/Topic";

export default function Home() {
  return (
    <div className="min-h-screen mt-10">
      <div className="grid place-items-center">
        <div
          className="grid grid-cols-1 gap-7 place-items-center  text-slate-700 "
          style={{
            width: "760px",
          }}
        >
          <p className="font-semibold text-2xl text-slate-800">
            Os básicos de Dart
          </p>

          <Topic
            title={"Hello World"}
            text={
              "Todo aplicativo tem uma função main(). Para exibir texto no console, você pode usar a função print() :"
            }
            code={`void main() {
    print('Hello, World!');
}`}
          />

          <Topic
            title={"Variáveis"}
            text={`Mesmo no código Dart de tipo seguro, a maioria das variáveis não
            precisa de tipos explícitos, graças à inferência de tipos.
            Usar "var" permite que a variável seja
            modificada posteriormente. Se a variável não precisa de ser
            modificada usa "final".`}
            code={`var name = 'Voyager I';
var year = 1977;
final antennaDiameter = 3.7;
final flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};`}
          />

          <Topic
            title={"Comente"}
            text={`Usa // ou /* */ para comentar. 
            para comentar. `}
            code={`// This is a normal, one-line comment.

/// This is a documentation comment, used to document libraries,
/// classes, and their members. Tools like IDEs and dartdoc treat
/// doc comments specially.

/* Comments like these are also supported. */`}
          />

          <Topic
            title={"Imports"}
            text={
              "Para acessar APIs definidas em outras bibliotecas, use import."
            }
            code={`// Importing core libraries
import 'dart:math';

// Importing libraries from external packages
import 'package:test/test.dart';

// Importing files
import 'path/to/my_other_file.dart';`}
          />

          <Topic
            title={"If / else if / else"}
            text={""}
            code={`if (year >= 2001) {
  print('21st century');
} else if (year >= 1901) {
  print('20th century');
}`}
          />
          <Topic
            title={"For"}
            text={"Você pode iterar diretamente em um objeto ou classicamente."}
            code={`for (final object in flybyObjects) {
  print(object);
}

for (int month = 1; month <= 12; month++) {
  print(month);
}`}
          />
          <Topic
            title={"While"}
            text={""}
            code={`while (year < 2016) {
  year += 1;
}`}
          />

          <Topic
            title={"Funções"}
            text={"Aqui você tem a definição e a chamada de uma função."}
            code={`int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);`}
          />

          <Topic title={"tille"} text={"text"} code={`code`} />
          <Topic title={"tille"} text={"text"} code={`code`} />
          <Topic title={"tille"} text={"text"} code={`code`} />

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
