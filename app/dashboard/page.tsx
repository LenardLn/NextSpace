import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { ProfileForm } from "./ProfileForm";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) redirect("api/auth/signin");

  const currentUser = session?.user?.name!;
  const user = await prisma.user.findFirst({
    where: {
      name: currentUser,
    },
  });

  return (
    <>
      <h1 className="text-3xl pb-5 text-center">Dashboard</h1>
      <ProfileForm user={user} />
    </>
  );
}
