// Projects.jsx
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "VIDLY – MOVIE RENT SYSTEM",
      description:
        "Developed a full-stack web application for managing movie rentals and user subscriptions with secure JWT authentication. Implemented CRUD operations for movies, customers, and rental transactions with RESTful APIs. Designed a responsive and intuitive UI for smooth browsing and booking experience, improving user satisfaction.",
      category: "Full Stack Web App",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/avadhutFrontEnd/react-projects",
      demo: "https://github.com/avadhutFrontEnd/react-projects",
      visualColor: "bg-purple-100 dark:bg-purple-900/30",
      buttonStyle:
        "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
      layout: "left", // visual on left, text on right
      images: [
        "/assets/images/vidly/Screenshot 2025-11-14 080712.png",
        "/assets/images/vidly/Screenshot 2025-11-14 081035.png",
        "/assets/images/vidly/Screenshot 2025-11-14 081258.png",
      ],
    },
    {
      id: 2,
      title: "GAMEHUB – GAME DISCOVERY PLATFORM",
      description:
        "Built a responsive game discovery platform integrating the RAWG API for real-time game data and search functionality. Implemented dynamic filtering, sorting, and search for thousands of game titles. Created a modern UI using reusable React components, improving overall performance and UX consistency.",
      category: "Frontend Web App",
      tech: ["React", "TypeScript", "Tailwind CSS", "RAWG API"],
      github: "https://github.com/avadhutFrontEnd/game-hub",
      demo: "https://github.com/avadhutFrontEnd/game-hub",
      visualColor: "bg-green-100 dark:bg-green-900/30",
      buttonStyle: "bg-purple-600 text-white hover:bg-purple-700",
      layout: "right", // text on left, visual on right
      images: ["/assets/images/gameHub/Screenshot 2025-11-14 110332.png"],
    },
    {
      id: 3,
      title: "QUESTION PAPER GENERATOR SYSTEM",
      description:
        "Developed a web-based platform to help educators create, organize, and manage question papers efficiently. Designed a folder-like structure for managing subjects and topics, improving data organization and accessibility. Built scalable REST APIs for question management, ensuring secure and efficient data handling.",
      category: "Full Stack Web App",
      tech: [
        "React 18",
        "TypeScript",
        "TanStack React Query",
        "Shadcn UI",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      github:
        "https://github.com/avadhutFrontEnd/Question-Paper-Generator-System",
      demo: "https://github.com/avadhutFrontEnd/Question-Paper-Generator-System",
      visualColor: "bg-purple-100 dark:bg-purple-900/30",
      buttonStyle:
        "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
      layout: "left", // visual on left, text on right
      images: [
        "/assets/images/Question Paper Generator System/Monosnap Question Craft Mastery - Google Chrome 20.png",
      ],
    },
  ];

  // Function to format description with bold parts
  const formatDescription = (text) => {
    // Split by sentences and make key phrases bold
    const sentences = text.split(". ");
    return sentences.map((sentence, index) => {
      // Bold key technical terms and achievements
      let formatted = sentence;

      // Make important phrases bold (matching the style in the images)
      const boldPhrases = [
        "secure JWT authentication",
        "CRUD operations",
        "RESTful APIs",
        "responsive and intuitive UI",
        "RAWG API",
        "dynamic filtering, sorting, and search",
        "reusable React components",
        "folder-like structure",
        "scalable REST APIs",
      ];

      boldPhrases.forEach((phrase) => {
        const regex = new RegExp(`(${phrase})`, "gi");
        formatted = formatted.replace(
          regex,
          '<strong class="text-black dark:text-white font-semibold">$1</strong>'
        );
      });

      return (
        <span key={index}>
          {index > 0 && ". "}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-400 dark:text-gray-500 mb-16 md:mb-20 tracking-tight"
        >
          Selected Works
        </motion.h2>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`flex flex-col ${
                project.layout === "right"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              } gap-8 md:gap-12 lg:gap-16 items-center`}
            >
              {/* Visual Mockup */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: project.layout === "right" ? 60 : -60,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15 + 0.2 }}
                className={`w-full md:w-1/2 ${project.visualColor} rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl relative overflow-hidden`}
              >
                {/* Image Container */}
                <div className="relative w-full min-h-[280px] md:min-h-[320px] lg:min-h-[380px] flex items-center justify-center">
                  {project.images && project.images.length > 0 ? (
                    project.images.length === 1 ? (
                      // Single image display - larger and more prominent
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                        className="relative w-full flex items-center justify-center group"
                      >
                        <img
                          src={project.images[0].replace(/ /g, "%20")}
                          alt={project.title}
                          className="w-full h-auto rounded-2xl shadow-2xl object-contain max-h-[350px] md:max-h-[400px] lg:max-h-[450px] border-4 border-white dark:border-gray-700 transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-3xl"
                        />
                      </motion.div>
                    ) : (
                      // Multiple images - improved staggered layout with larger sizes
                      <div className="relative w-full h-full flex items-center justify-center">
                        {project.images.map((img, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            initial={{ opacity: 0, y: 40, scale: 0.85 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                              duration: 0.7,
                              delay: index * 0.15 + 0.3 + imgIndex * 0.15,
                            }}
                            whileHover={{ scale: 1.05, zIndex: 50 }}
                            className={`absolute ${
                              imgIndex === 0
                                ? "z-10 w-[85%] left-0 top-1/2 -translate-y-1/2 rotate-[-3deg]"
                                : imgIndex === 1
                                ? "z-20 w-[80%] right-[-5%] top-[25%] rotate-[4deg]"
                                : "z-15 w-[75%] left-[10%] top-[60%] rotate-[-2deg]"
                            }`}
                          >
                            <div className="relative rounded-xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-700 bg-white dark:bg-gray-800">
                              <img
                                src={img.replace(/ /g, "%20")}
                                alt={`${project.title} - Screenshot ${
                                  imgIndex + 1
                                }`}
                                className="w-full h-auto object-contain max-h-[280px] md:max-h-[320px] lg:max-h-[360px]"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )
                  ) : (
                    // Fallback if no images
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-400 dark:text-gray-600">
                        No image available
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: project.layout === "right" ? -60 : 60,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15 + 0.25 }}
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
                    <span className="ml-1">{project.id === 2 ? "→" : ">"}</span>
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
