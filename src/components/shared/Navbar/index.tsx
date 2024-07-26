"use client";

import Link from "next/link";

const links = [
  { name: "Life", path: "/posts" },
  { name: "Home", path: "/" },
  { name: "Other", path: "/other" },
];

export default function Navbar() {
  return (
    <nav className="bg-[#F5F5F5]">
      <div className="w-full h-2 bg-primary" />
      <menu className="flex gap-8 justify-center wrapper">
        {links.map((link) => (
          <li>
            <Link className="block p-2 hover:underline" href={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  );
}
