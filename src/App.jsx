import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
const [darkMode, setDarkMode] = useState(true);
return (
<div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
<Hero />
<About />
<Project />
<Skills />
<Contact />
<Footer />
</div>
);
}