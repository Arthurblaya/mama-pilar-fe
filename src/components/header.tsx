import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo-mapi.svg";

export default function Header() {
  return (
    <header className="bg-primary">
      <div className="container mx-auto max-w-screen-lg flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="100"
            height="80"
            className="cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
}
