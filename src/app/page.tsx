import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center my-7 wrapper">
          {/* Search */}
          <search>
            <svg
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
            <p className="font-semibold text-5xl">Pink Dusk</p>
            <span className="text-slate-600">blog for woman</span>
          </div>
          {/* Account */}
          <svg
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
        </div>

        {/* header nav */}
        <nav className="bg-[#F5F5F5] border-t-">
          <div className="w-full h-2 bg-gradient-to-r from-[#ECAAC6] to-[#5DD5EF]" />
          <menu className="flex gap-8 justify-center wrapper">
            <li>
              <Link className="nav-link" href={"/posts"}>Life</Link>
            </li>
            <li>
              <a className="nav-link" href="#">
                Relationships
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Diets
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Аcquaintances
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Woman’s health
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Other
              </a>
            </li>
          </menu>
        </nav>
      </header>

      <main className="flex-1 wrapper">
        <section className="mt-12">
          <ul className="flex flex-col gap-6">
            <li>
              <a href="/blog/article-1">
                <article className="flex">
                  <img
                    className="object-cover"
                    src="https://placehold.co/300x200"
                    alt="blogpost image"
                  />
                  <div className="ml-4 p-2">
                    <h3 className="mb-2 font-semibold">New of the day</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quidem odit et unde illum error quasi explicabo ipsa
                      vitae, eaque harum laborum blanditiis eius doloremque
                      iusto tenetur voluptate magni corrupti aperiam.
                    </p>
                  </div>
                </article>
              </a>
            </li>
            <li>
              <a href="#">
                <article className="flex flex-col max-w-80">
                  <img
                    className="object-cover"
                    src="https://placehold.co/300x200"
                    alt="blogpost image"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta, sequi nostrum! Quisquam.
                    </h3>
                    <p className="my-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Excepturi dignissimos, voluptate cumque distinctio
                      repudiandae expedita at, nam incidunt delectus repellat,
                      praesentium aperiam dolorum magnam?
                    </p>

                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>

                      <small>12 min</small>
                    </div>
                  </div>
                </article>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-stone-400/5 py-4 mt-12">
        <div className="wrapper">
          {/* Newsletter */}
          <form className="flex items-center gap-6">
            <label htmlFor="newslettersub">Newsletter subscription</label>
            <input
              className="p-2 border border-stone-400 rounded-lg outline-none"
              type="text"
              name="newslettersub"
              id="newslettersub"
              placeholder="enter your email"
            />
            <button
              className="bg-gradient-to-r from-[#ECAAC6] to-[#5DD5EF] text-white py-2 px-4 rounded-md"
              type="submit"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4">Get in touch</p>

          <address>Fort-Worth, Dallas, TX</address>
          {/* Socials */}
          <ul className="flex gap-2 mt-4">
            <li>
              <a href="#">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C9.284 2 8.944 2.01133 7.87733 2.06C6.81267 2.10867 6.08533 2.278 5.44933 2.52533C4.78267 2.776 4.178 3.16933 3.678 3.67867C3.16948 4.17809 2.77591 4.78233 2.52467 5.44933C2.27867 6.08533 2.10867 6.81333 2.06 7.878C2.012 8.944 2 9.28333 2 12C2 14.7167 2.01133 15.056 2.06 16.1227C2.10867 17.1873 2.278 17.9147 2.52533 18.5507C2.776 19.2173 3.16933 19.822 3.67867 20.322C4.1781 20.8305 4.78234 21.2241 5.44933 21.4753C6.08533 21.722 6.81267 21.8913 7.87733 21.94C8.944 21.9887 9.284 22 12 22C14.716 22 15.056 21.9887 16.1227 21.94C17.1873 21.8913 17.9147 21.722 18.5507 21.4747C19.2173 21.224 19.822 20.8307 20.322 20.3213C20.8305 19.8219 21.2241 19.2177 21.4753 18.5507C21.722 17.9147 21.8913 17.1873 21.94 16.1227C21.9887 15.056 22 14.716 22 12C22 9.284 21.9887 8.944 21.94 7.87733C21.8913 6.81267 21.722 6.08533 21.4747 5.44933C21.2236 4.78204 20.83 4.17755 20.3213 3.678C19.8219 3.16948 19.2177 2.77591 18.5507 2.52467C17.9147 2.27867 17.1867 2.10867 16.122 2.06C15.056 2.012 14.7167 2 12 2ZM12 3.802C14.67 3.802 14.9867 3.812 16.0413 3.86C17.016 3.90467 17.5453 4.06667 17.898 4.20467C18.3647 4.38533 18.698 4.60267 19.048 4.952C19.398 5.302 19.6147 5.63533 19.7953 6.102C19.9327 6.45467 20.0953 6.984 20.14 7.95867C20.188 9.01333 20.198 9.33 20.198 12C20.198 14.67 20.188 14.9867 20.14 16.0413C20.0953 17.016 19.9333 17.5453 19.7953 17.898C19.6353 18.3324 19.3799 18.7253 19.048 19.048C18.7254 19.38 18.3324 19.6354 17.898 19.7953C17.5453 19.9327 17.016 20.0953 16.0413 20.14C14.9867 20.188 14.6707 20.198 12 20.198C9.32933 20.198 9.01333 20.188 7.95867 20.14C6.984 20.0953 6.45467 19.9333 6.102 19.7953C5.66764 19.6353 5.27467 19.3799 4.952 19.048C4.62012 18.7253 4.36475 18.3323 4.20467 17.898C4.06733 17.5453 3.90467 17.016 3.86 16.0413C3.812 14.9867 3.802 14.67 3.802 12C3.802 9.33 3.812 9.01333 3.86 7.95867C3.90467 6.984 4.06667 6.45467 4.20467 6.102C4.38533 5.63533 4.60267 5.302 4.952 4.952C5.27463 4.62003 5.66761 4.36465 6.102 4.20467C6.45467 4.06733 6.984 3.90467 7.95867 3.86C9.01333 3.812 9.33 3.802 12 3.802Z"
                    fill="#000000"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 15.3367C11.5618 15.3367 11.128 15.2504 10.7231 15.0827C10.3183 14.915 9.95047 14.6692 9.64064 14.3594C9.3308 14.0495 9.08502 13.6817 8.91734 13.2769C8.74965 12.8721 8.66335 12.4382 8.66335 12C8.66335 11.5618 8.74965 11.1279 8.91734 10.7231C9.08502 10.3183 9.3308 9.95046 9.64064 9.64062C9.95047 9.33078 10.3183 9.08501 10.7231 8.91732C11.128 8.74964 11.5618 8.66333 12 8.66333C12.885 8.66333 13.7336 9.01487 14.3594 9.64062C14.9851 10.2664 15.3367 11.1151 15.3367 12C15.3367 12.8849 14.9851 13.7336 14.3594 14.3594C13.7336 14.9851 12.885 15.3367 12 15.3367ZM12 6.86C10.6368 6.86 9.32942 7.40153 8.36549 8.36547C7.40155 9.32941 6.86002 10.6368 6.86002 12C6.86002 13.3632 7.40155 14.6706 8.36549 15.6345C9.32942 16.5985 10.6368 17.14 12 17.14C13.3632 17.14 14.6706 16.5985 15.6345 15.6345C16.5985 14.6706 17.14 13.3632 17.14 12C17.14 10.6368 16.5985 9.32941 15.6345 8.36547C14.6706 7.40153 13.3632 6.86 12 6.86ZM18.6353 6.76667C18.6353 7.0889 18.5073 7.39794 18.2795 7.6258C18.0516 7.85366 17.7426 7.98167 17.4204 7.98167C17.0981 7.98167 16.7891 7.85366 16.5612 7.6258C16.3334 7.39794 16.2053 7.0889 16.2053 6.76667C16.2053 6.44443 16.3334 6.13539 16.5612 5.90753C16.7891 5.67968 17.0981 5.55167 17.4204 5.55167C17.7426 5.55167 18.0516 5.67968 18.2795 5.90753C18.5073 6.13539 18.6353 6.44443 18.6353 6.76667Z"
                    fill="#000000"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.47714 17.5229 1.99999 12 1.99999C6.47715 1.99999 2 6.47714 2 12C2 16.9913 5.65686 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79687C10.4375 7.29062 11.9304 5.90624 14.2146 5.90624C15.3087 5.90624 16.4531 6.10155 16.4531 6.10155V8.56249H15.1921C13.9499 8.56249 13.5625 9.33333 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z"
                    fill="#000000"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5949 4.45999C21.5421 4.71353 22.2865 5.45785 22.54 6.40501C22.9982 8.12002 23 11.7004 23 11.7004C23 11.7004 23 15.2807 22.54 16.9957C22.2865 17.9429 21.5421 18.6872 20.5949 18.9407C18.88 19.4007 12 19.4007 12 19.4007C12 19.4007 5.12002 19.4007 3.405 18.9407C2.45785 18.6872 1.71353 17.9429 1.45999 16.9957C1 15.2807 1 11.7004 1 11.7004C1 11.7004 1 8.12002 1.45999 6.40501C1.71353 5.45785 2.45785 4.71353 3.405 4.45999C5.12002 4 12 4 12 4C12 4 18.88 4 20.5949 4.45999ZM15.5134 11.7007L9.79788 15.0003V8.40101L15.5134 11.7007Z"
                    fill="#000000"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <small className="flex justify-end">Powered by danilka</small>
        </div>
      </footer>
    </>
  );
}
