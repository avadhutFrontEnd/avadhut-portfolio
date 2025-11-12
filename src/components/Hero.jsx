// Hero.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileDark from '../assets/GitHub Profile(avadhutFrontEndDev) - Dark.png';
import profileLight from '../assets/GitHub Profile(avadhutFrontEndDev) - Light.png';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    // Initial check
    checkDarkMode();
    
    // Watch for changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mb-12 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="text-blue-600 dark:text-blue-400">Full Stack</span> Developer
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Building modern web applications with passion
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            Hi! I'm Avadhut Jagde, a full stack developer specializing in 
            creating responsive and user-friendly web applications with modern technologies.
          </p>
          <div className="flex space-x-4 mb-8">
            <a href="https://github.com/avadhutFrontEnd" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/avadhut-jagde" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <FaLinkedin size={28} />
            </a>
            <a href="https://twitter.com/avadhutFrontEnd" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <FaTwitter size={28} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors text-center">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 font-medium transition-colors text-center">
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center relative"
          style={{
            borderRadius: '1rem',
            animation: 'glow-pulse 2s ease-in-out infinite'
          }}
        >
          {/* Browser Window Mockup */}
          <motion.div 
            className="w-full max-w-4xl relative z-10"
            style={{ transform: 'scale(1.1)' }}
            animate={{ 
              y: [0, -10, 0],
            }}
            
          >
    
            {/* Browser Chrome */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-t-xl px-4 py-3 flex items-center space-x-2 shadow-lg relative z-10"
            
            >
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white dark:bg-gray-600 rounded-lg px-4 py-1.5 text-xs text-gray-600 dark:text-gray-300 shadow-inner border border-gray-200 dark:border-gray-500">
                  github.com/avadhutFrontEnd
                </div>
              </div>
            </div>
            
            {/* GitHub Dashboard Screenshot - no padding, image fills entire area */}
            <div className="bg-white dark:bg-gray-800 rounded-b-xl shadow-2xl overflow-hidden border-x border-b border-gray-200 dark:border-gray-700 relative z-10">
              <motion.img 
                src={isDarkMode ? profileDark : profileLight}
                alt="GitHub Dashboard - avadhutFrontEnd" 
                className="w-full h-auto object-cover select-none block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                key={isDarkMode ? 'dark' : 'light'}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;