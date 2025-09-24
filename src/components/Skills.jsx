import React from "react";


export default function Skills() {
return (
<section id="skills" className="py-20 px-8 max-w-4xl mx-auto">
<h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
<div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
{["HTML", "CSS", "JavaScript", "React", "Tailwind", "BootStrap","Node.JS","MongoDB","Express","GSAP"].map((skill) => (
<div key={skill} className="p-4 bg-gray-500 dark:bg-gray-800 rounded-xl shadow-md">
{skill}
</div>
))}
</div>
</section>
);
}