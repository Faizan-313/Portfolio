import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    function handleForm() {
        toast.success("Message sent successfully!");
    }

    return (
        <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Contact Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mt-2 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-lg">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Info */}
            <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Get in Touch</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                I'm currently available for freelance work. Let's talk about how I can help with your next project.
                </p>

                <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <FaEnvelope className="text-blue-600 mt-1" />
                    <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <a href="mailto:peerfaizan7788@gmail.com" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
                        peerfaizan7788@gmail.com
                    </a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <FaPhoneAlt className="text-blue-600 mt-1" />
                    <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                    <a href="tel:+15551234567" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
                        ------------
                    </a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-blue-600 mt-1" />
                    <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Kashmir</p>
                    </div>
                </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <form className="space-y-6" action={handleForm}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                    </label>
                    <input
                    type="text"
                    required
                    id="name"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                    </label>
                    <input
                    type="email"
                    required
                    id="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                    </label>
                    <input
                    type="text"
                    required
                    id="subject"
                    placeholder="Project Inquiry"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                    </label>
                    <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition duration-300"
                >
                    Send Message
                </button>
                </form>
                <ToastContainer /> 
            </div>
            </div>
        </div>
        </section>
    );
}
