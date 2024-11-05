import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth } from "@/auth";
import SignIn from "@/components/SignIn";
import SingOut from "@/components/SingOut";

const NavMenu = async () => {
  const session = await auth();

  return (
    <nav className=" pl-2  flex bg-blue-600 text-white h-[70px] justify-between items-center">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="NextSpace Logo"
          width={216}
          height={30}
          className="hidden sm:block"
          priority
        />
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
        <li className="h-[70px] flex items-center p-1">
          {session && session?.user ? (
            <>
              <SingOut />
              <Link href={"/dashboard"}>
                <Image
                  src={session?.user.image ?? "/mememan.webp"}
                  width={32}
                  height={32}
                  alt="avatar"
                  className="ml-3"
                />
              </Link>
            </>
          ) : (
            <SignIn />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
