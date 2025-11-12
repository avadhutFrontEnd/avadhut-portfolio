// Skills.jsx
import { FaReact, FaNode, FaJs, FaGitAlt } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiNestjs,
  SiSocketdotio,
  SiPostgresql,
  SiFigma,
  SiDocker,
  SiMysql,
  SiRedux,
  SiVite
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Javascript', icon: <FaJs size={48} className="text-yellow-500" /> },
    { name: 'Typescript', icon: <SiTypescript size={48} className="text-blue-600" /> },
    { name: 'React', icon: <FaReact size={48} className="text-cyan-500" /> },
    { name: 'Redux', icon: <SiRedux size={48} className="text-purple-600" /> },
    { name: 'Node.js', icon: <FaNode size={48} className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress size={48} className="text-gray-800 dark:text-gray-200" /> },
    { name: 'Nest.js', icon: <SiNestjs size={48} className="text-red-600" /> },
    { name: 'Socket.io', icon: <SiSocketdotio size={48} className="text-black dark:text-white" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={48} className="text-blue-700" /> },
    { name: 'MongoDB', icon: <SiMongodb size={48} className="text-green-600" /> },
    { name: 'MySQL', icon: <SiMysql size={48} className="text-blue-600" /> },
    { name: 'Tailwindcss', icon: <SiTailwindcss size={48} className="text-cyan-500" /> },
    { name: 'Figma', icon: <SiFigma size={48} className="text-purple-600" /> },
    { name: 'Docker', icon: <SiDocker size={48} className="text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt size={48} className="text-orange-600" /> },
    { name: 'Vite', icon: <SiVite size={48} className="text-yellow-500" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            data-aos="fade-up" 
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            My Skills
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100" 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="flex flex-col items-center"
              >
                <div className="mb-3 flex items-center justify-center">
                  {skill.icon}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;