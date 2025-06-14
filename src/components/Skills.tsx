import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaServer } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiMongodb, SiPostgresql } from 'react-icons/si';

const frontend = [
    { name: 'React', icon: <FaReact className="w-6 h-6 text-blue-500" /> },
    { name: 'Redux', icon: <SiRedux className="w-6 h-6 text-purple-500" /> },
    { name: 'HTML', icon: <i className="devicon-html5-plain colored text-[24px]" /> },
    { name: 'CSS', icon: <i className="devicon-css3-plain colored text-[24px]" /> },
    ];

    const backend = [
    { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6 text-green-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6 text-blue-400" /> },
    { name: 'REST APIs', icon: <FaServer className="w-6 h-6 text-gray-500" /> },
    ];

    const programmingLanguages = [
    { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
    { name: 'Python', icon: <FaPython className="w-6 h-6 text-blue-400" /> },
    { name: 'C++', icon: <i className="devicon-cplusplus-plain colored text-[24px]" /> },
    { name: 'C', icon: <i className="devicon-c-plain colored text-[24px]" /> },
    { name: 'Java', icon: <i className="devicon-java-plain colored text-[24px]" /> },
    ];

    const Skills = () => {
    const renderSkills = (
        title: string,
        skills: { name: string; icon: React.ReactNode }[]
    ) => (
        <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 border-l-4 border-blue-600 pl-3">
            {title}
        </h3>
        <ul className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
            <li
                key={index}
                className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1"
            >
                <div className="mr-2">{skill.icon}</div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
            </li>
            ))}
        </ul>
        </div>
    );

    return (
        <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">My Skills</h2>
            <div className="w-20 h-1 mx-auto bg-blue-600 mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
                I’ve worked with a wide range of technologies across the full stack. Here are some of my core competencies.
            </p>
            </div>

            {renderSkills('Frontend', frontend)}
            {renderSkills('Backend', backend)}
            {renderSkills('Programming Languages', programmingLanguages)}
        </div>
        </section>
    );
};

export default Skills;
