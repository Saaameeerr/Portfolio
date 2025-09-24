import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md sticky top-0 bg-inherit z-50">
      <h1 className="text-2xl font-bold">MyPortfolio</h1>
      <ul className="hidden md:flex gap-6 font-medium">
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>

      {/* Theme toggle icon */}
      <div
        onClick={() => setDarkMode(!darkMode)}
        className="cursor-pointer text-2xl hover:scale-110 transition"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
    </nav>
  );
}
