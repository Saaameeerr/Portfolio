import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-8 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        Hi, I'm <span className="font-semibold">Your Name</span>, a passionate{" "}
        <span className="text-blue-500">Web Developer</span> who loves
        building clean, modern, and responsive web applications.
        <br />
        <br />
        I specialize in <span className="font-semibold">React.js</span>,{" "}
        <span className="font-semibold">JavaScript</span>, and{" "}
        <span className="font-semibold">TailwindCSS</span>. During my internship
        as a MERN stack developer, I focused mainly on frontend development and
        built a hospital dashboard with modern UI features.
        <br />
        <br />
        Apart from coding, I enjoy learning new tools, creating smooth UI
        animations (with Framer Motion & GSAP), and constantly improving my
        problem-solving skills.
      </p>
    </section>
  );
}
