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
          <Topic
            title={"Criar uma AppBar"}
            text={"Neste vídeo veremos como criar o AppBar."}
            videoLink={"https://www.youtube.com/embed/ef5dsBRjnxM"}
            code={`import 'package:flutter/material.dart';

void main(){
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context){
    return const MaterialApp(
      home:RootPage(),
    );
  }
}

class RootPage extends StatefulWidget {
  const RootPage({Key? key}) : super(key: key);

  @override
  State<RootPage> createState() => _RootPageState();
}


class _RootPageState extends State<RootPage>{
  @override
  Widget build(BuildContext context){
    return const Scaffold();   
  }
}`}
          />
          <Topic
            title={"Adicionar um botão"}
            videoLink={"https://www.youtube.com/embed/6JmzeYv_fwA"}
            code={`import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.blue),
      home: RootPage(),
    );
  }
}

class RootPage extends StatefulWidget {
  const RootPage({Key? key}) : super(key: key);

  @override
  State<RootPage> createState() => _RootPageState();
}

class _RootPageState extends State<RootPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My First App')
      )
    );
  }
}`}
          />

          <Topic
            title={"Criar um menu"}
            videoLink={"https://www.youtube.com/embed/8U0lfO1BbDY"}
            code={`import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.blue),
      home: RootPage(),
    );
  }
}

class RootPage extends StatefulWidget {
  const RootPage({Key? key}) : super(key: key);

  @override
  State<RootPage> createState() => _RootPageState();
}

class _RootPageState extends State<RootPage> {
  int currentPage = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('My First App')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          debugPrint('Button pressed');
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
`}
          />

          <Topic
            title={"Criar páginas e adicionar imagens"}
            videoLink={"https://www.youtube.com/embed/IKbPDQnzeiU"}
            code={`import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.blue),
      home: RootPage(),
    );
  }
}

class RootPage extends StatefulWidget {
  const RootPage({Key? key}) : super(key: key);

  @override
  State<RootPage> createState() => _RootPageState();
}

class _RootPageState extends State<RootPage> {
  int currentPage = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('My First App')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          debugPrint('Button pressed');
        },
        child: const Icon(Icons.add),
      ),
      bottomNavigationBar: NavigationBar(
        destinations: const[
          NavigationDestination(icon: Icon(Icons.home), label: 'Home'),
          NavigationDestination(icon: Icon(Icons.person), label: 'Profile'),
        ],
        onDestinationSelected: (int index){
          setState((){
            currentPage = index;
          });
        },
        selectedIndex: currentPage,
      ),
    );
  }
}`}
          />
          <Topic
            code={`import 'package:flutter/material.dart';

class HomePage extends StatelessWidget{
  const HomePage({Key? key}) : super(key: key);

  @override 
  Widget build(BuildContext context){
    return Container();
  }
}`}
          />

          <Topic title={"test"} text={"test"} videoLink={""} code={`test`} />
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
