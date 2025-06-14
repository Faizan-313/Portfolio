import { FaBriefcase, FaProjectDiagram, FaUsers, FaAward, FaCode } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 transition-all">
        <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center">
            <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 dark:text-white">
                About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mt-1 mx-auto mb-4"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                Get to know more about my background, experience, and passion for
                development
            </p>
            </div>

            {/* Info Card */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all">
            <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <h3 className="text-2xl font-semibold">
                I'm Faizan, a Full Stack Developer
                </h3>
                <p className="text-lg">
                I'm committed to writing clean, maintainable code and following
                best practices. I enjoy tackling complex problems and continuously
                learning new technologies to stay at the forefront of web
                development.
                </p>

                {/* Icons */}
                <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col items-center gap-2">
                    <FaBriefcase className="w-10 h-10 text-blue-600 dark:text-cyan-400" />
                    <span className="text-sm">Fresher</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <FaProjectDiagram className="w-10 h-10 text-blue-600 dark:text-cyan-400" />
                    <span className="text-sm">8+ Projects</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <FaUsers className="w-10 h-10 text-blue-600 dark:text-cyan-400" />
                    <span className="text-sm">2+ collaborations</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <FaAward className="w-10 h-10 text-blue-600 dark:text-cyan-400" />
                    <span className="text-sm">Achievements</span>
                </div>
                </div>
            </div>

            {/* Side Icon */}
            <div className="flex justify-center md:justify-end">
                <FaCode className="w-28 h-28 text-blue-600 dark:text-cyan-400" />
            </div>
            </div>
        </div>
        </section>
    );
};

export default About;
