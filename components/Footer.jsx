import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 p-2.5 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between  dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm ml-12 text-gray-500 sm:text-center dark:text-gray-400">
        2022 PIDMED - By Thomas MARQUES & Clément GAZELLE
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://choosealicense.com/licenses/mit/"
            target="_blank"
            rel="noreferrer"
            className="mr-3 hover:underline md:mr-10"
          >
            Licensing
          </a>
        </li>
        <li>
          <a
            href="https://github.com/beirao"
            target="_blank"
            rel="noreferrer"
            className="mr-3 hover:underline md:mr-10 "
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/marquesth"
            target="_blank"
            rel="noreferrer"
            className="mr-3 hover:underline md:mr-10"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </footer>
  );
}
