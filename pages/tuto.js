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
            videoLink={"https://www.youtube.com/embed/QD9N9AtxbDg"}
          />
          <Topic
            title={"Configuração do Android Studio"}
            text={
              "Neste segundo vídeo veremos como configurar um emulador android para nosso projeto Flutter."
            }
            videoLink={"https://www.youtube.com/embed/iBBf28WHu0M"}
          />
          <Topic
            title={"Abrir emulador no VSCode"}
            text={
              "Neste terceiro vídeo veremos como executar nosso projeto a partir do Visual Studio Code com nosso emulador"
            }
            videoLink={"https://www.youtube.com/embed/99iKjwm36Bo"}
          />
          <Topic
            title={"Criar uma AppBar"}
            text={"Neste vídeo veremos como criar o AppBar."}
            videoLink={"https://www.youtube.com/embed/BqqqARegxwc"}
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
            videoLink={"https://www.youtube.com/embed/onIAsze3O4g"}
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
            videoLink={"https://www.youtube.com/embed/N2eLnMz2B8s"}
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
            videoLink={"https://www.youtube.com/embed/b6CN7j9TNz0"}
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

          <Topic
            title={"Widget - Parte 1"}
            videoLink={"https://www.youtube.com/embed/3gcNSM3NZvM"}
            code={`class LearnFlutterPage extends StatefulWidget{
  const LearnFlutterPage({Key? key}) : super(key: key);

  @override 
  State<LearnFlutterPage> createState() => _LearnFlutterPageState();
}


class _LearnFlutterPageState extends State<LearnFlutterPage>{
  @override 
  Widget build(BuildContext context){
    return Container();
  }
}`}
          />
          <Topic
            code={`import 'package:flutter/material.dart';

class LearnFlutterPage extends StatefulWidget {
  const LearnFlutterPage({Key? key}) : super(key: key);

  @override
  State<LearnFlutterPage> createState() => _LearnFlutterPageState();
}

class _LearnFlutterPageState extends State<LearnFlutterPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Learn Flutter'),
      ),
      body: Column(
        children: [
          Image.asset('images/Sua_Imagem.jpg')
        ],
      ),
    );
  }
}`}
          />
          <Topic
            title={"Widget - Parte 2"}
            videoLink={"https://www.youtube.com/embed/21k1t1Z0B_o"}
            code={`import 'package:flutter/material.dart';

class LearnFlutterPage extends StatefulWidget {
  const LearnFlutterPage({Key? key}) : super(key: key);

  @override
  State<LearnFlutterPage> createState() => _LearnFlutterPageState();
}

class _LearnFlutterPageState extends State<LearnFlutterPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Learn Flutter'),
      ),
      body: Column(
        children: [
          Image.asset('images/Inatel.jpg.webp'),
          const SizedBox(height: 10,),
          const Divider(color: Colors.black,),
          Container(
            margin : const EdgeInsets.all(10),
            padding: const EdgeInsets.all(10),
            width: double.infinity,
            color : Colors.blueGrey,
            child: const Center(
              child: Text(
                'This is a text Widget',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 25,
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}`}
          />
          <Topic
            title={"Widget - Parte 3"}
            text={""}
            videoLink={"https://www.youtube.com/embed/"}
            code={`import 'package:flutter/material.dart';

class LearnFlutterPage extends StatefulWidget {
  const LearnFlutterPage({Key? key}) : super(key: key);

  @override
  State<LearnFlutterPage> createState() => _LearnFlutterPageState();
}

class _LearnFlutterPageState extends State<LearnFlutterPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Learn Flutter'),
      ),
      body: Column(
        children: [
          Image.asset('images/Inatel.jpg.webp'),
          const SizedBox(height: 10,),
          const Divider(color: Colors.black,),
          Container(
            margin : const EdgeInsets.all(10),
            padding: const EdgeInsets.all(10),
            width: double.infinity,
            color : Colors.blueGrey,
            child: const Center(
              child: Text(
                'This is a text Widget',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 25,
                ),
              ),
            ),
          ),
          ElevatedButton(
            onPressed: (){
              debugPrint('ElevatedButton');
            },
            child: const Text('Elevated Button'),
          ),

          OutlinedButton(
            onPressed: (){
              debugPrint('OutlinedButton');
            },
            child: const Text('Outlined Button'),
          ),

          TextButton(
            onPressed: (){
              debugPrint('TextButton');
            },
            child: const Text('Text Button'),
          ),

          GestureDetector(
            onTap: (){
              debugPrint('This is the row');
            },
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: const[
                Icon(
                  Icons.smartphone,
                  color: Colors.blue,
                ),
                Text('Row Widget'),
                Icon(
                  Icons.laptop,
                  color: Colors.blue,
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}`}
          />
          <Topic
            title={"Nova página através do botão de menu"}
            videoLink={"https://www.youtube.com/embed/"}
            code={`import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}`}
          />
          <Topic
            code={`import 'package:flutter/material.dart';
import 'package:flutter_application/home_page.dart';


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
      body: const HomePage(),
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
          {/* <Topic title={"test"} text={"test"} videoLink={""} code={`test`} /> */}

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
