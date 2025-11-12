// Projects.jsx
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'VIDLY – MOVIE RENT SYSTEM',
      description: 'Developed a full-stack web application for managing movie rentals and user subscriptions with secure JWT authentication. Implemented CRUD operations for movies, customers, and rental transactions with RESTful APIs. Designed a responsive and intuitive UI for smooth browsing and booking experience, improving user satisfaction.',
      category: 'Full Stack Web App',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/avadhutFrontEnd/react-projects',
      demo: 'https://github.com/avadhutFrontEnd/react-projects',
      visualColor: 'bg-purple-100 dark:bg-purple-900/30',
      buttonStyle: 'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200',
      layout: 'left' // visual on left, text on right
    },
    {
      id: 2,
      title: 'GAMEHUB – GAME DISCOVERY PLATFORM',
      description: 'Built a responsive game discovery platform integrating the RAWG API for real-time game data and search functionality. Implemented dynamic filtering, sorting, and search for thousands of game titles. Created a modern UI using reusable React components, improving overall performance and UX consistency.',
      category: 'Frontend Web App',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'RAWG API'],
      github: 'https://github.com/avadhutFrontEnd/game-hub',
      demo: 'https://github.com/avadhutFrontEnd/game-hub',
      visualColor: 'bg-green-100 dark:bg-green-900/30',
      buttonStyle: 'bg-purple-600 text-white hover:bg-purple-700',
      layout: 'right' // text on left, visual on right
    },
    {
      id: 3,
      title: 'QUESTION PAPER GENERATOR SYSTEM',
      description: 'Developed a web-based platform to help educators create, organize, and manage question papers efficiently. Designed a folder-like structure for managing subjects and topics, improving data organization and accessibility. Built scalable REST APIs for question management, ensuring secure and efficient data handling.',
      category: 'Full Stack Web App',
      tech: ['React 18', 'TypeScript', 'TanStack React Query', 'Shadcn UI', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/avadhutFrontEnd/Question-Paper-Generator-System',
      demo: 'https://github.com/avadhutFrontEnd/Question-Paper-Generator-System',
      visualColor: 'bg-purple-100 dark:bg-purple-900/30',
      buttonStyle: 'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200',
      layout: 'left' // visual on left, text on right
    }
  ];

  // Function to format description with bold parts
  const formatDescription = (text) => {
    // Split by sentences and make key phrases bold
    const sentences = text.split('. ');
    return sentences.map((sentence, index) => {
      // Bold key technical terms and achievements
      let formatted = sentence;
      
      // Make important phrases bold (matching the style in the images)
      const boldPhrases = [
        'secure JWT authentication',
        'CRUD operations',
        'RESTful APIs',
        'responsive and intuitive UI',
        'RAWG API',
        'dynamic filtering, sorting, and search',
        'reusable React components',
        'folder-like structure',
        'scalable REST APIs'
      ];
      
      boldPhrases.forEach(phrase => {
        const regex = new RegExp(`(${phrase})`, 'gi');
        formatted = formatted.replace(regex, '<strong class="text-black dark:text-white font-semibold">$1</strong>');
      });
      
      return (
        <span key={index}>
          {index > 0 && '. '}
          <span dangerouslySetInnerHTML={{ __html: formatted }} />
        </span>
      );
    });
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Title */}
        <motion.h2 
          data-aos="fade-up"
          className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-400 dark:text-gray-500 mb-16 md:mb-20 tracking-tight"
        >
          Selected Works
        </motion.h2>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`flex flex-col ${
                project.layout === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-8 md:gap-12 lg:gap-16 items-center`}
            >
              {/* Visual Mockup */}
              <motion.div
                initial={{ opacity: 0, x: project.layout === 'right' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`w-full md:w-1/2 ${project.visualColor} rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl relative overflow-hidden`}
              >
                {/* Mockup Container */}
                <div className="relative h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                  {/* Browser/Device Mockups */}
                  {project.id === 1 ? (
                    // Vidly - Browser mockups
                    <div className="relative w-full h-full flex items-center justify-center gap-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-purple-300/50 dark:from-purple-800/30 dark:to-purple-900/30 rounded-2xl"></div>
                      <div className="relative z-10 w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform rotate-[-2deg]">
                        <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex-1 bg-white dark:bg-gray-600 rounded px-2 py-0.5 text-xs text-gray-500">vidly.com</div>
                        </div>
                        <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                          <span className="text-white font-bold text-xl">VIDLY</span>
                        </div>
                      </div>
                      <div className="relative z-20 w-3/4 max-w-xs bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform rotate-[3deg] translate-y-8">
                        <div className="bg-gray-100 dark:bg-gray-700 px-3 py-1.5 flex items-center gap-1.5">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                          </div>
                        </div>
                        <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">Movie Catalog</span>
                        </div>
                      </div>
                    </div>
                  ) : project.id === 2 ? (
                    // GameHub - Mobile mockups
                    <div className="relative w-full h-full flex items-center justify-center gap-3 md:gap-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-200/50 to-green-300/50 dark:from-green-800/30 dark:to-green-900/30 rounded-2xl"></div>
                      <div className="relative z-10 w-24 md:w-32 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform rotate-[-5deg]">
                        <div className="h-48 md:h-64 bg-gradient-to-br from-green-400 to-green-600 flex flex-col items-center justify-center p-4">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full mb-2"></div>
                          <div className="text-white text-xs md:text-sm font-bold text-center">GameHub</div>
                        </div>
                      </div>
                      <div className="relative z-20 w-28 md:w-36 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="h-56 md:h-72 bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col p-3">
                          <div className="text-white text-xs font-bold mb-2">Popular Games</div>
                          <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="bg-white/10 rounded-lg h-8 flex items-center px-2">
                                <div className="w-4 h-4 bg-white/30 rounded mr-2"></div>
                                <div className="h-2 bg-white/20 rounded flex-1"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative z-10 w-24 md:w-32 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform rotate-[5deg]">
                        <div className="h-48 md:h-64 bg-gradient-to-br from-purple-400 to-pink-600 flex flex-col items-center justify-center p-4">
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full mb-2 flex items-center justify-center">
                            <span className="text-white text-2xl">🎮</span>
                          </div>
                          <div className="text-white text-xs md:text-sm font-bold text-center">Search</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Question Paper Generator - Browser mockup
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-indigo-300/50 dark:from-purple-800/30 dark:to-indigo-900/30 rounded-2xl"></div>
                      <div className="relative z-10 w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
                        <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex-1 bg-white dark:bg-gray-600 rounded px-2 py-0.5 text-xs text-gray-500">qpgenerator.com</div>
                        </div>
                        <div className="h-64 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6">
                          <div className="w-20 h-20 bg-white/20 rounded-xl mb-4 flex items-center justify-center">
                            <span className="text-white text-3xl">📝</span>
                          </div>
                          <div className="text-white font-bold text-xl mb-2">Question Paper Generator</div>
                          <div className="text-white/80 text-sm text-center">Organize • Create • Manage</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, x: project.layout === 'right' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="w-full md:w-1/2 space-y-6"
              >
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-400 dark:text-gray-500 mb-4 md:mb-6 tracking-wide uppercase">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {formatDescription(project.description)}
                  </p>
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-500 mb-6 font-light">
                    {project.category}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.buttonStyle} px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm md:text-base shadow-lg hover:shadow-xl`}
                  >
                    VIEW WORK
                    <span className="ml-1">{project.id === 2 ? '→' : '>'}</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm md:text-base"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
