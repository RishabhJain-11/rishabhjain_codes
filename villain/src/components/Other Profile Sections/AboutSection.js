import React from "react";
import Tools from "./Tools";

export default function AboutSection() {
  return (
    <>
      <section class="bg-white dark:bg-black">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-816 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-yellow-400">
            About Me
          </h2>
          <div class="mt-4 md:mt-0">
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Hi, I'm Ashris! I am a software engineer with a background in
              architecture. I love building products that that engage and
              educate people. I studied at the{" "}
              <a
                href="/"
                className="text-yellow-400 underline underline-offset-4"
              >
                MIT Media Lab
              </a>{" "}
              at the Fluid Interfaces Group where I worked on interdisciplinary
              projects like an Augmented Reality app that makes physics fun and
              a Brain Computer Interface that tries to guess what you are
              thinking. I did my undergrad in IIT Kharagpur studying
              Architecture. You might have stumbled upon this website from India
              in Pixels - one of my side projects that visualizes data about
              India across different fields like sports, culture, economy,
              politics and science and has garnered over 60,000 subscribers with
              a total of 13 Million views. My work style makes me oscillate
              between two selves - on one end, I think deeply about humans,
              their emotions, their desires - akin more to a poet and a
              philosopher. On another end, I think like a mathematician,
              thinking about the right tech framework, software architecture and
              user interface. My end goal is always to build products that have
              empathy engineered into them. They are able to translate a
              fundamental insight about human beings to a solid tech product
              people love to use. Thank you for your time to go through my
              website. You can reach me via hello@iashris.com or Facebook. P.S:
              To jump ahead to the projects, click here.
            </p>
          </div>
        </div>
      </section>
      
    </>
  );
}
