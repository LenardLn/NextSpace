import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit" className="bg-white text-black p-1 rounded-md">
        Signin
      </button>
    </form>
  );
}
