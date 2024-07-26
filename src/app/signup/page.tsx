import Link from "next/link";

export default function SignUp() {
  return (
    <section className="section h-full flex justify-center flex-col items-center">
      <h1 className="font-bold text-2xl mb-8 xl:text-3xl">
        Register a new account
      </h1>
      <form className="w-full md:w-1/2" method="post">
        <fieldset>
          <legend className="sr-only">Register new user</legend>
          <div className="input-wrapper">
            <label className="mb-2 font-semibold" htmlFor="username">
              Username<span className="text-red-800">*</span>
            </label>
            <input
              className="input"
              type="text"
              placeholder="for example, user_name123"
              name="username"
              id="username"
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="mb-2 font-semibold" htmlFor="email">
              Email<span className="text-red-800">*</span>
            </label>
            <input
              className="input"
              type="text"
              placeholder="for example, user@gmail.com"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="mb-2 font-semibold" htmlFor="password">
              Password<span className="text-red-800">*</span>
            </label>
            <input
              className="input"
              type="text"
              placeholder="for example, e#F5v6@$fF5b^JgG4"
              name="password"
              id="password"
              required
            />
          </div>
        </fieldset>
        <button className="primary-btn w-full" type="submit">
          Sign Up
        </button>
        <p className="font-semibold text-center mt-8">
          Already have an account?{" "}
          <span className="text-green-800">
            <Link href={"/signin"}>Sign In</Link>
          </span>
        </p>
      </form>
    </section>
  );
}
