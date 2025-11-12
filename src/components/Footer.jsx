// Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Avadhut Jagde
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer passionate about building modern, scalable web applications with clean code and great user experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/avadhutFrontEnd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/avadhut-jagde" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/avadhutFrontEnd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="text-blue-600 dark:text-blue-400 mr-3" />
                <a 
                  href="mailto:avadhutjagde05@gmail.com" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  avadhutjagde05@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="text-blue-600 dark:text-blue-400 mr-3" />
                <a 
                  href="https://www.linkedin.com/in/avadhut-jagde" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center">
                <FaGithub className="text-blue-600 dark:text-blue-400 mr-3" />
                <a 
                  href="https://github.com/avadhutFrontEnd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {year} Avadhut Jagde. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Made with <FaHeart className="inline text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;