"use client";

import Image from "next/image";
import { updateProfile } from "../_lib/actions";
import { useFormStatus } from "react-dom";

export default function UpdateProfileForm({ guest, children }) {
  const { name, email, nationality, nationalIDnum, flag } = guest;

  return (
    <form
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      action={updateProfile}
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          defaultValue={name}
          name="name"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <Image
            src={flag}
            alt="Country flag"
            className="h-5 rounded-sm"
            width={30}
            height={30}
          />
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalIDnum">National ID number</label>
        <input
          name="nationalIDnum"
          defaultValue={nationalIDnum}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-accent-500 rounded-md cursor-pointer px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? "Updating..." : "Update profile"}
    </button>
  );
}
