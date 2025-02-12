import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo-mapi.svg";

export default function Header() {
  return (
    <header className="pt-safe bg-primary">
      <div className="container mx-auto flex max-w-screen-lg items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src={Logo}
            alt="Logo"
            width="100"
            height="80"
            className="cursor-pointer"
          />
        </Link>
        <input
          type="text"
          placeholder="Cerca... 🔍"
          className="input input-bordered input-secondary mr-4 w-full max-w-80"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mr-4 size-6 flex-shrink-0 text-base-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
    </header>
  );
}
