'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Database, Cloud, Brain, Layers } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Code, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS','UI/UX','JavaScript'] },
  { name: 'Backend', icon: Database, items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB','REST APIs','Flask'] },
  { name: 'Cloud', icon: Cloud, items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
  // { name: 'Mobile', icon: Smartphone, items: ['React Native', 'Flutter', 'iOS', 'Android'] },
  { name: 'AI/ML', icon: Brain, items: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain','scikit-learn', 'OpenCV'] },
  { name: 'DevOps', icon: Layers, items: ['Git', 'Linux', 'Nginx', 'Monitoring','Docker','Google Colab'] },
];

export default function Skills3D() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: hoveredSkill === skill.name ? 1 : 0.7,
                        x: hoveredSkill === skill.name ? 0 : -10
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-300 text-sm"
                    >
                      • {item}
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, rgba(0, 255, 136, 0.1) 0%, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
