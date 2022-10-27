import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-white p-3">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/" class="flex items-center">
            <Image src="/logo_page.png" alt="logo" width="60" height="60" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-black">
              Treinamento Flutter
            </span>
          </Link>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-gray-700  hover:bg-gray-100 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow"></div>
          <div>
            <Link
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 rounded hover:bg-gray-100 mr-8"
            >
              Porque Flutter ?
            </Link>
            <Link
              href="/setup"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 rounded hover:bg-gray-100 mr-8"
            >
              Instalação
            </Link>
            <Link
              href="/syntax"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 rounded hover:bg-gray-100 mr-8"
            >
              Sintaxe
            </Link>
            <Link
              href="/tuto"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-700 rounded hover:bg-gray-100 mr-8"
            >
              Tuto
            </Link>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}
