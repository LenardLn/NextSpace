import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;
  const user = await prisma.user.findUnique({ where: { id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const user = await prisma.user.findUnique({ where: { id } });
  const { name, bio, image } = user ?? {};

  return (
    <div className="grid place-items-center gap-5">
      <h1 className="text-3xl font-bold">{name}</h1>
      <img
        className="w-[220px] h-[220px] sm:w-[25rem] sm:h-[25rem] rounded-full"
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
      />
      <div className="w-[220px]  sm:w-[25rem] ">
        <h3 className="font-bold">Bio</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
}
