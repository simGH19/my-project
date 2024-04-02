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
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.
          </p>
        </div>
      </div>
      <hr className="h-0.5 bg-secondary-100 opacity-50 mt-24" />
    </section>
  );
}
