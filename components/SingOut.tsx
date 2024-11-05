import { signOut } from "@/auth";

export default async function SingOut() {
  return (
    <form
      action={async () => {
        "use server";

        await signOut({ redirectTo: "/" });
      }}
    >
      <button type="submit" className="bg-white text-black p-1 rounded-md">
        Signout
      </button>
    </form>
  );
}
