import Link from "next/link";
import Image from "next/image";
import ScrollToTop from "../components/ScrollToTop";

export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/" className="flex items-center">
            <Image src="/logo_page.png" alt="logo" width="60" height="60" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
              Treinamento Flutter
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-700  hover:bg-gray-100 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 rounded hover:bg-gray-100 mr-8"
          >
            Porque Flutter ?
          </Link>
          <Link
            href="/setup"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 rounded hover:bg-gray-100 mr-8"
          >
            Instalação
          </Link>
          <Link
            href="/syntax"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 rounded hover:bg-gray-100 mr-8"
          >
            Sintaxe
          </Link>
          <Link
            href="/tuto"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 rounded hover:bg-gray-100 mr-8"
          >
            Tuto
          </Link>
        </div>
      </nav>
      <hr />
      <ScrollToTop />
    </div>
  );
}
