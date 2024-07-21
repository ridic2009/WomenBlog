"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProfileBadge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button className="relative" onClick={() => setIsOpen(!isOpen)}>
        <svg
          aria-label="Sign in application"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
      {isOpen && (
        <menu className="absolute right-0 block bg-white rounded-lg border">
          <ul>
            <li className="block border-b text-center">
              <Link className="block px-4 py-2" href={"/profile"}>
                Profile
              </Link>
            </li>
            <li className="block border-b text-center">
              <Link className="block px-4 py-2" href={"/profile/friends"}>
                Friends
              </Link>
            </li>
            <li className="block text-center">
              <Link className="block px-4 py-2" href={"/profile/favorite"}>
                Favorite
              </Link>
            </li>
          </ul>
        </menu>
      )}
    </div>
  );
}
