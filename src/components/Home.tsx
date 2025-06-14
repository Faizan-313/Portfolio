// Home.tsx
import { useDarkMode } from "../context/ThemeContext";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import menu from "../assets/menu.png";
import hero from "../assets/user.png";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaDribbble,
    FaBars,
    FaTimes,
    } from "react-icons/fa";
    import type { Variants } from "framer-motion"
    import { useEffect, useState } from "react";
    import { motion, AnimatePresence } from "framer-motion";

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
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const menuVariants: Variants = {
        hidden: { x: "-100%" },
        visible: {
        x: 10,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
        },
        exit: { x: "-100%", transition: { duration: 0.3 } },
    };

    const itemVariants: Variants = {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    return (
        <div id="home" className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
        <header className="fixed z-50 w-full bg-inherit shadow-md">
            <div className="max-w-7xl mx-auto flex items-center px-4 sm:px-8 py-4 relative">
            {screenWidth < 786 && !mobileMenuOpen && (
                <button
                className="w-4 h-6"
                onClick={() => {
                    setMobileMenuOpen(true);
                }}
                >
                {darkMode ? <FaBars /> : <img className="h-5 w-5" src={menu} alt="menu" />}
                </button>
            )}

            <AnimatePresence>
                {mobileMenuOpen && (
                <motion.div
                    className={`absolute left-0 top-full md:hidden z-50 shadow-lg px-6 py-4 flex flex-col gap-4 rounded-md border w-60 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                >
                    <button onClick={() => setMobileMenuOpen(false)} className="self-end">
                    <FaTimes className="w-5 h-5" />
                    </button>
                    {navItems.map((item) => (
                    <motion.a
                        key={item.name}
                        href={item.href}
                        variants={itemVariants}
                        className={`font-medium text-lg ${
                        darkMode ? "text-white hover:text-cyan-400" : "text-black hover:text-blue-600"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {item.name}
                    </motion.a>
                    ))}
                </motion.div>
                )}
            </AnimatePresence>

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

            <button
                className="w-8 h-8 fixed right-4 top-4 z-50"
                onClick={() => setDarkMode(!darkMode)}
                hidden = {mobileMenuOpen}
            >
                <img
                src={darkMode ? sun : moon}
                alt="theme toggle"
                className="w-6 h-6 cursor-pointer"
                />
            </button>
            </div>
        </header>

        <main className="px-4 sm:px-8 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center justify-center gap-14">
            <div className="flex flex-col gap-6 text-center lg:text-left max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Hi, I'm <span className="text-blue-600">Peer Faizan</span>
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
            <div className="flex gap-5 justify-center lg:justify-start mt-4">
                <a target="_blank" href="https://github.com/Faizan-313">
                <FaGithub className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
                </a>
                <a
                target="_blank"
                href="https://www.linkedin.com/in/faizan-syed-4370152b9"
                >
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
