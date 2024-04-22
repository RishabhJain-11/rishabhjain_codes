import React from "react";

export default function Profile() {
  return (
    <>
      <div className="bg-white dark:bg-black">
        <div className="py-2 px-4 mx-auto max-w-screen-l text-center pb-28 lg:px-12">
          <a
            href="/"
            className="inline-flex justify-between items-center text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 m-8"
            role="alert"
          >
            <img
              src="https://pbs.twimg.com/profile_images/1782265073224085504/b7QKYt_O_400x400.jpg"
              className="rounded-full border border-yellow-400"
              alt="name"
            ></img>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-yellow-400">
            Rishabh Manoj Jain
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Developer . Machine Learning . DevOps . Cloud Computing . Web
            Development . Open Source . Freelancing . AI Art & Work . Football .
            Maps . Brand
          </p>
        </div>
      </div>
    </>
  );
}
