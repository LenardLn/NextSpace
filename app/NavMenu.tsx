import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <nav className="flex bg-blue-600 text-white h-[70px] justify-between items-center">
      <Link href={"/"}>
        <Image src="./logo.svg" alt="NextSpace Logo" width={216} height={30} />
      </Link>

      <ul className="list-none flex mr-4">
        <li className="h-[70px] flex items-center p-1">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="h-[70px] flex items-center p-1">
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li className="h-[70px] flex items-center p-1">
          <Link href={"/users"}>Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
