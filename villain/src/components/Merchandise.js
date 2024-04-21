import React from "react";

export default function Merchandise() {
  return (
    <>
      <aside
        aria-label="Related articles"
        class="py-8 lg:py-24 bg-gray-50 dark:bg-black"
      >
        <div class="px-4 mx-auto max-w-screen-xl">
          <h2 class="mb-8 text-2xl font-bold text-yellow-400 dark:text-yellow-400 line-through">
            MERCHANDISE
          </h2>
          <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <a href="#/" className="group block overflow-hidden">
              <div className="relative h-[350px] sm:h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                />

                <img
                  src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                />
              </div>

              <div className="relative bg-black pt-3">
                <h3 className="text-sm text-yellow-400 group-hover:underline group-hover:underline-offset-4">
                  Limited Edition Sports Trainer
                </h3>

                <p className="mt-1.5 tracking-wide text-yellow-400">$189.99</p>
              </div>
                      </a>
                      <a href="#/" className="group block overflow-hidden">
              <div className="relative h-[350px] sm:h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                />

                <img
                  src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                />
              </div>

              <div className="relative bg-black pt-3">
                <h3 className="text-sm text-yellow-400 group-hover:underline group-hover:underline-offset-4">
                  Limited Edition Sports Trainer
                </h3>

                <p className="mt-1.5 tracking-wide text-yellow-400">$189.99</p>
              </div>
                      </a>
                      <a href="#/" className="group block overflow-hidden">
              <div className="relative h-[350px] sm:h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                />

                <img
                  src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                />
              </div>

              <div className="relative bg-black pt-3">
                <h3 className="text-sm text-yellow-400 group-hover:underline group-hover:underline-offset-4">
                  Limited Edition Sports Trainer
                </h3>

                <p className="mt-1.5 tracking-wide text-yellow-400">$189.99</p>
              </div>
            </a>
          </div>
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="flex flex-col items-center gap-4 rounded-lg bg-yellow-400 p-6 shadow-lg sm:flex-row sm:justify-between">
              <strong class="text-xl text-black sm:text-xl">
                {" "}
                Explore a treasure trove of insights, musings, and knowledge
                tidbits{" "}
              </strong>

              <a
                class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-black hover:border-black hover:bg-black hover:text-yellow-400 focus:outline-none focus:ring active:bg-black"
                href="/"
              >
                <span class="text-sm font-medium"> Explore Now !!! </span>

                <svg
                  class="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
