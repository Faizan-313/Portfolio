import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] transition-all px-4 py-10 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-screen-xl mx-auto text-center">
                <div className="text-3xl font-bold text-blue-600 mb-4">
                    Faizan<span className="text-green-500">.</span>
                </div>

                <ul className="flex justify-center gap-6 flex-wrap mb-6 font-medium">
                    <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
                    <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
                    <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
                </ul>

                <div className="flex justify-center gap-4 mb-6 text-gray-400 dark:text-gray-500 text-xl">
                    <a target="_blank" href="https://github.com/Faizan-313" className="hover:text-blue-600 transition-colors">
                        <FaGithub />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/faizan-syed-4370152b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-600 transition-colors">
                        <FaLinkedin />
                    </a>
                    <a target="_blank" href="#" className="hover:text-blue-600 transition-colors">
                        <FaTwitter />
                    </a>
                    <a target="_blank" href="#" className="hover:text-blue-600 transition-colors">
                        <FaDribbble />
                    </a>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    © 2025 Peer Faizan. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
