import Link from "next/link";
import { db } from "@/db"
import { createBlock } from "@/app/actions";

export default function CreateBlocksPage() {

  return (
    <form action={createBlock}>
    <div className="flex flex-col gap-4 my-20 mx-10">
      <h1 className="font-bold text-lg">Create a block</h1>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            className="border rounded p-2 w-full"
            id="code"
            name="code"
          />
        </div>
        <div className="flex gap-4 justify-end">
          <button
            className="rounded p-2 bg-black hover:bg-gray-700 text-white w-28"
            type="submit"
          >
            Create
          </button>
        </div>
      </div>
      </form>
  );
}