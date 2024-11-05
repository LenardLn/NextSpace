"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="pl-5 pt-5">
      <h2 className="text-3xl pb-5">Something went wrong!</h2>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
