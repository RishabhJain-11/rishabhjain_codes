import React from "react";

export default function Resume() {
  return (
    <section class="bg-white dark:bg-black">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-816 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-yellow-400">
          Resume
        </h2>
        <section className="bg-black text-white">
          <a href="/">
            Checkout and Download my Resume. Over{" "}
            <span className="text-yellow-400 underline underline-offset-4">
              Here{" "}
            </span>
          </a>
        </section>
      </div>
    </section>
  );
}
