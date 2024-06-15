import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.webp";

export function Logo(props) {
  return (
    <Link href="/ ">
      <h2 className="text-1xl text-purple-600 font-bold">SavannaHEALTH</h2>
    </Link>
  );
}
