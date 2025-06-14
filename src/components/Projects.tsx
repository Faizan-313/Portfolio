import { FaGithub } from "react-icons/fa";
import hospital from "../assets/project/hospital.png";
import paste from "../assets/project/paste.png";
import book from "../assets/project/book.png";
import potato from "../assets/project/potato.png";

const projects = [
    {
        title: "Hospital Management System",
        src: hospital,
        description:
        "A comprehensive hospital management system with patient registration, appointment scheduling, and medical records management.",
        tech: ["React", "Node.js", "MySQL"],
        link: "https://github.com/Faizan-313/Hospital-Management-System",
    },
    {
        title: "Paste App",
        src: paste,
        description:
        "A simple and efficient text-saving and sharing application that allows users to add, update, and delete their pastes easily.",
        tech: ["React", "Tailwind"],
        link: "https://github.com/Faizan-313/Paste-App",
    },
    {
        title: "Potato Leaf Disease Detection",
        src: potato,
        description:
        "A machine learning-based application for detecting potato leaf diseases using image processing techniques.",
        tech: ["Python", "Streamlit", "Jupyter Notebook"],
        link: "https://github.com/Faizan-313/Potato-Leaf-Disease-Detection",
    },
    {
        title: "Book Vault",
        src: book,
        description:
        "A project for storing and managing a personalized book collection.",
        tech: ["JavaScript", "EJS", "CSS"],
        link: "https://github.com/Faizan-313/The-Book-Vault",
    },
    ];

    export default function Projects() {
    return (
        <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                My Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mt-2 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
                A selection of my recent work showcasing my skills and approach
            </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, index) => (
                <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
                >
                <div>
                    <img
                        src={project.src}
                        alt={project.title}
                        className="rounded-lg mb-4 w-[60%] ml-10  md:w-full md:ml-0 h-auto object-cover transition-transform transform hover:scale-105"
                    />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100 px-2 py-1 rounded-md font-medium"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
                <div className="mt-auto">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center group"
                        >
                        <FaGithub className="w-6 h-6 text-blue-600 dark:text-gray-300 group-hover:text-blue-900 dark:group-hover:text-cyan-400 transition-colors" />
                        <span className="ml-2 font-bold text-sm text-blue-600 dark:text-gray-300 group-hover:text-blue-900 dark:group-hover:text-cyan-400 transition-colors">
                            Code
                        </span>
                    </a>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}
