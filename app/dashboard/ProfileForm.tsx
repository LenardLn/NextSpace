"use client";

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();
  };

  return (
    <div>
      <h2 className="text-xl text-center pb-5">Edit Your Profile</h2>
      <form onSubmit={updateUser} className="grid gap-10 px-5">
        <div className="grid place-items-start">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            defaultValue={user?.name ?? ""}
            className="border border-black rounded-lg p-2"
          />
        </div>
        <div className="grid place-items-start">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            autoComplete="off"
            cols={30}
            rows={10}
            defaultValue={user?.bio ?? ""}
            className="border border-black rounded-lg p-4"
          ></textarea>
        </div>
        <div className="grid place-items-start">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            autoComplete="age"
            defaultValue={user?.age ?? 0}
            className="border border-black rounded-lg p-2"
          />
        </div>
        <div className="grid place-items-start">
          <label htmlFor="image">Profile Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            autoComplete="url"
            defaultValue={user?.image ?? ""}
            className="border border-black rounded-lg p-2"
          />
        </div>
        <button
          type="submit"
          className="mt-5 bg-blue-600 text-white p-3 rounded-lg transition duration-300 ease-in-out hover:bg-transparent hover:text-black hover:outline-4 hover:outline-black"
        >
          Save
        </button>
      </form>
    </div>
  );
}
