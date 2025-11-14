// UIDesigns.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const UIDesigns = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const uiDesigns = [
    {
      id: 1,
      title: "AutomatePro",
      image: "/assets/images/Other UI Designs/AutomatePro.jpg",
      description: "A SaaS web application designed for efficient project management, utilizing AI-driven personalization to enhance project planning and execution. Features interactive dashboards and streamlined workflows for modern teams.",
      dribbbleLink: "https://dribbble.com/shots/23764325-AutomatePro-Project-Management-Web-App-Dashboard-SaaS",
    },
    {
      id: 2,
      title: "BRAVER",
      image: "/assets/images/Other UI Designs/BRAVER.jpg",
      description: "A project management application designed to foster leadership qualities such as boldness, resilience, authenticity, vision, empathy, and responsibility. Transforms project managers into culture creators and strategic thinkers.",
      dribbbleLink: "https://dribbble.com/shots/23843282-Project-Management-App-Braver",
    },
    {
      id: 3,
      title: "FinFlow",
      image: "/assets/images/Other UI Designs/FinFlow.png",
      description: "A financial management platform offering comprehensive tools for budgeting, expense tracking, and financial analysis. Features elegant data visualization and intuitive navigation for seamless money management.",
      dribbbleLink: "https://dribbble.com/shots/23843282-Project-Management-App-Braver",
    },
    {
      id: 4,
      title: "LogiDigital",
      image: "/assets/images/Other UI Designs/LogiDigital.png",
      description: "A transportation dispatcher web application that enables monitoring of drivers, managing rides, scheduling trips, and providing a comprehensive overview of fleet operations. Features real-time tracking and efficient ride scheduling.",
      dribbbleLink: "https://dribbble.com/shots/21546494-Transportation-Dispatcher-Web-App",
    },
    {
      id: 5,
      title: "OutletBuddy",
      image: "/assets/images/Other UI Designs/outletbuddy.png",
      description: "An interactive map application designed for searching nearby stores and outlets. Enhances the shopping experience by providing real-time location data and helping users discover stores in their vicinity with ease.",
      dribbbleLink: "https://dribbble.com/shots/25108863-OutletBuddy-Interactive-Map-for-Nearby-Store-Searches",
    },
  ];

  const openModal = (design) => {
    setSelectedImage(design);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="ui-designs" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-400 dark:text-gray-500 mb-4 md:mb-6 tracking-tight"
          >
            Design Skills Showcase
          </motion.h2>

          {/* Section Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-12 md:mb-16 max-w-2xl"
          >
            Recreating beautiful UI designs from Dribbble using pure HTML and CSS. Each implementation demonstrates proficiency in front-end development, responsive layouts, and attention to detail—transforming design mockups into functional, pixel-perfect web experiences.
          </motion.p>

          {/* UI Designs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {uiDesigns.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openModal(design)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <motion.img
                      src={design.image.replace(/ /g, "%20")}
                      alt={design.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="text-white text-center px-4"
                      >
                        <p className="text-lg font-semibold mb-2">{design.title}</p>
                        <p className="text-sm opacity-90">Click to view</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Design Info */}
                  <div className="p-4 md:p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200">
                        {design.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full whitespace-nowrap ml-2">
                        Recreated
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                      {design.description}
                    </p>
                    <a
                      href={design.dribbbleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                    >
                      View Original on Dribbble <FaExternalLinkAlt size={10} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer and Credits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="max-w-3xl">
              <h3 className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 mb-4">
                Design Credits & Disclaimer
              </h3>
              <div className="space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  <strong className="text-gray-800 dark:text-gray-200">Important:</strong> All UI designs displayed above are <strong>recreations</strong> of original designs found on Dribbble. I did not create the original designs—I implemented them using HTML and CSS to demonstrate my front-end development skills.
                </p>
                <p>
                  Each design is credited to its original creator on Dribbble. You can view the original designs by clicking the "View on Dribbble" links provided with each project.
                </p>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500 italic">
                  These recreations are displayed for portfolio and educational purposes only, showcasing my ability to translate design mockups into functional web interfaces.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for Full Image View */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
            >
              <FaTimes size={24} />
            </button>

            {/* Image */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedImage.image.replace(/ /g, "%20")}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              {/* Image Info */}
              <div className="p-6 bg-white dark:bg-gray-900">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {selectedImage.description}
                </p>
                <a
                  href={selectedImage.dribbbleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  View Original on Dribbble <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default UIDesigns;

