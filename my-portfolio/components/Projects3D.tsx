'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "Ai-interview-prep-bot",
    description: "I Interview Prep Bot An intelligent full-stack web application that helps users prepare for technical interviews by simulating real-time question/answer sessions, tracking progress, and offering personalized feedback.",
    tech: ["React","Node.js","Express","MongoDB","Flask (for AI)","TensorFlow"],
    github: "https://github.com/Shaunak-bit/Ai-interview-prep-bot",
    live: "https://ecommerce-ai-demo.vercel.app",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Resume-insights ",
    description: "This project is an AI-powered document insight tool that allows users to upload PDF documents (primarily resumes) and receive concise summaries or key insights. It maintains a historical record of uploaded documents and their analyses, providing a seamless user experience.",
    tech: [" FastAPI (Python)","Sarvam AI API","PyMuPDF / pdfminer"],
    github: "https://github.com/Shaunak-bit/Resume-insights",
    live: "https://collab-tool-demo.vercel.app",
    image: "/api/placeholder/400/300"
  },
  {
    title: " SentiScape ",
    description: "SentiScape is an AI-powered, Streamlit-based sentiment analysis platform that delivers real-time, accurate emotional insights with interactive visualizations for diverse domains.",
    tech: ["React Native", "Python", "NLP", "AI", "UI/UX"],
    github: "https://github.com/Shaunak-bit/Sentiscope",
    live: "https://smart-home-demo.vercel.app",
    image: "/api/placeholder/400/300"
  },
  {
    title: "signspeak",
    description: "Developed a sign language recognition app using real-time camera feed, featuring UI components for gesture capture,translated text display, gesture analytics, session management, and lighting optimization.",
    tech: [" Python", "TypeScript", "Vite", "React", "TensorFlow"],
    github: "https://github.com/Shaunak-bit/Sign-language",
    live: "https://smart-home-demo.vercel.app",
    image: "/api/placeholder/400/300"
  }

];

export default function Projects3D() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30"
                    animate={{
                      scale: hoveredProject === index ? 1.1 : 1,
                      rotate: hoveredProject === index ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/20">
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
                
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    scale: hoveredProject === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
