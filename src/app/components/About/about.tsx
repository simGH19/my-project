import React from "react";

export default function About() {
  return (
    <section className="pb-24">
      <div className="base-section grid md:grid-cols-2">
        <div className="col-span-1 pb-8 md:pb-0">
          <h1 className="text-6xl font-bebas">ABOUT ME</h1>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl mb-4">
            I am a front-end developer / fullstack developer based in Sweden.
          </h3>
          <p className="text-secondary-100">
            I am a front-end/fullstack developer based in Sweden looking for exciting
            opportunities. I also got some experience in UX with 1 year of studies as an UX designer. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems and constantly wanting to learn more. Currently, I&apos;m focused on learning more about Next.js / javascript and are plannig to attend a summer course to learn Flutter aswell. 
            While I am not programming, I enjoy playing video games, going to the gym and hang out with friends/family.
          </p>
        </div>
      </div>
      <hr className="h-0.5 bg-secondary-100 opacity-50 mt-24" />
    </section>
  );
}
