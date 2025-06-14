// Home.tsx
import { useDarkMode } from "../context/ThemeContext";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import menu from "../assets/menu.png";
import hero from "../assets/user.png";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaBars } from "react-icons/fa";

import { useEffect, useState } from "react";

export default function Home() {
    const { darkMode, setDarkMode } = useDarkMode();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div
        className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
        >
        <header className="z-50 w-full bg-inherit shadow-md">
            <div className="max-w-7xl mx-auto flex items-center px-4 sm:px-8 py-4">
            {screenWidth < 786 && (
                <button 
                    className="w-7 h-7"
                    hidden={mobileMenuOpen}
                    onClick={() => {
                        setMobileMenuOpen(!mobileMenuOpen);
                    }}
                >
                    {darkMode ? <FaBars /> : <img className="h-5 w-5" src={menu} alt="menu" />}
                </button>
            )}

            {mobileMenuOpen && (
                <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                    {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`py-2 font-medium ${darkMode ? 'hover:text-cyan-400' : 'hover:text-blue-600'} transition-colors`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                    ))}
                </div>
                </div>
            )}

            {screenWidth >= 786 && (
                <ul className="flex-1 flex justify-center gap-15 font-medium text-lg">
                {navItems.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className={`font-medium hover:${
                        darkMode ? "text-cyan-400" : "text-blue-600"
                    } transition-colors`}
                    >
                    {item.name}
                    </a>
                ))}
                </ul>
            )}

            {/* theme toggle */}
            <button
                className="w-8 h-8 fixed right-4 top-4 z-50"
                onClick={() => setDarkMode(!darkMode)}
                >
                <img
                    src={darkMode ? sun : moon}
                    alt="theme toggle"
                    className="w-full h-full cursor-pointer"
                />
                </button>

            </div>
        </header>

        {/* ================= Hero / Main ================= */}
        <main className="px-4 sm:px-8 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center justify-center gap-14">
            <div className="flex flex-col gap-6 text-center lg:text-left max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Hi, I'm <span className="text-blue-600">Peer Faizan</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
                Full‑Stack Developer
            </h2>

            <p className="text-lg lg:text-xl text-gray-500 dark:text-gray-400">
                I build scalable web applications with modern technologies.
                <br />
                Passionate about creating seamless user experiences and robust
                back‑end systems.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
                {[
                { label: "Contact Me", href: navItems[4].href },
                { label: "View Projects", href: navItems[3].href },
                ].map((btn) => (
                <a
                    key={btn.label}
                    href={btn.href}
                    className="px-6 py-2 border-2 rounded-full transition-transform hover:-translate-y-1
                                bg-white text-blue-600 border-blue-600
                                hover:bg-blue-600 hover:text-white
                                dark:bg-blue-950 dark:text-white dark:border-black
                                dark:hover:bg-white dark:hover:text-black"
                >
                    {btn.label}
                </a>
                ))}
            </div>

            {/* social icons */}
            <div className="flex gap-5 justify-center lg:justify-start mt-4">
                <a target="_blank" href="https://github.com/Faizan-313">
                    <FaGithub className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
                </a >
                <a target="_blank" href="https://www.linkedin.com/in/faizan-syed-4370152b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <FaLinkedin className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
                </a>
                <a target="_blank" href="#">
                    <FaTwitter className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
                </a>
                <a target="_blank" href="#">
                    <FaDribbble className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
                </a>
            </div>
            </div>

            {/* -------- right hero image -------- */}
            <div
            className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-4 border-blue-600
                                flex items-center justify-center relative
                                shadow-[0_0_40px_rgba(59,130,246,0.35)]
                                hover:scale-105 transition-transform"
            >
            <img
                src={hero}
                alt="hero"
                className="w-56 h-56 sm:w-60 sm:h-60 object-cover rounded-full"
            />
            </div>
        </main>
        </div>
    );
}
