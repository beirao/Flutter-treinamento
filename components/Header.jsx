import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between bg-white ">
        <Link href="/">
          <div className="flex items-center mx-12 my-3">
            <Image
              src="/logo_page.png"
              className="mr-3 h-6 sm:h-12"
              width="70"
              height="70"
              alt="BoarBet Logo"
            />
            <p className="text-3xl text-slate-600 ml-6">Treinamento Flutter</p>
          </div>
        </Link>

        <div className="flex items-center mr-12">
          <Link
            href="/"
            className="text-black hover:text-gray-600 mr-12 p-5 text-lg"
          >
            Porque Flutter ?
          </Link>
          <Link
            href="/setup"
            className="text-black hover:text-gray-600 mr-12 p-5 text-lg"
          >
            Instalação
          </Link>
          <Link
            href="/syntax"
            className="text-black hover:text-gray-600 mr-12 p-5 text-lg"
          >
            Sintaxe
          </Link>
          <Link
            href="/tuto"
            className="text-black hover:text-gray-600 mr-12 p-5 text-lg"
          >
            Tuto
          </Link>
        </div>
      </nav>
      <hr />
    </div>
  );
}
