export const dynamic = "force-static";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "We are a social media company",
};

export default async function page() {
  return (
    <main className="grid ">
      <h1 className="text-3xl font-bold mb-5">About</h1>
      <p className="text-xl"> We are a social media company!</p>
      <p className="text-xl">
        Recreated by:
        <span className="font-bold p-2">Lenard Nagy</span>
        <img
          src="/profil-modified.png"
          width={64}
          height={64}
          alt="Lenard face"
          className="inline-block"
        />
      </p>
      <p className="text-xl ">E-mail: nagylenard2002@gmail.com</p>
    </main>
  );
}
