import Link from "next/link";
import Navbar from "../Navbar";
import ProfileBadge from "../ProfileBadge";

export default function Header() {
  let isAdmin = false;

  return (
    <header>
      <div className="flex justify-between items-center my-7 wrapper">
        <search>
          <svg
            aria-label="search"
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </search>
        <div>
          <p className="font-semibold text-5xl">Woman blog</p>
          <span className="text-slate-600">blog for woman</span>
        </div>
        {isAdmin ? (
          <ProfileBadge />
        ) : (
          <Link href={"/signin"}>
            {" "}
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
          </Link>
        )}
      </div>
      <Navbar />
    </header>
  );
}
