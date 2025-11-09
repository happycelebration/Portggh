import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Phone, MapPin, Award, Code, Monitor, Smartphone, Globe } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

// 3D Floating Orb Component
function FloatingOrb({ position, color, speed }) {
  return (
    <Sphere position={position} args={[1.2, 64, 64]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={speed}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  );
}

// Tech Stack Icons
const techIcons = {
  React: "bg-cyan-500",
  JavaScript: "bg-yellow-500",
  Python: "bg-blue-500",
  Node: "bg-green-500",
  MongoDB: "bg-green-600",
  ThreeJS: "bg-purple-500",
  Tailwind: "bg-teal-500",
  Framer: "bg-violet-500"
};

// Projects Data
const projects = [
  {
    id: 1,
    title: "AI-Powered Learning Platform",
    description: "An intelligent platform that adapts to user learning patterns using machine learning algorithms.",
    tech: ["React", "Python", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
    image: "https://placehold.co/600x400/6366f1/ffffff?text=AI+Learning"
  },
  {
    id: 2,
    title: "3D Portfolio Experience",
    description: "Interactive 3D portfolio with immersive navigation and dynamic content rendering.",
    tech: ["React", "ThreeJS", "Framer", "Tailwind"],
    github: "#",
    live: "#",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=3D+Portfolio"
  },
  {
    id: 3,
    title: "Smart Campus Navigator",
    description: "Campus navigation app with real-time location tracking and route optimization.",
    tech: ["React", "Node", "MongoDB", "JavaScript"],
    github: "#",
    live: "#",
    image: "https://placehold.co/600x400/06b6d4/ffffff?text=Campus+Nav"
  }
];

// About Data
const aboutData = {
  name: "Alex Morgan",
  title: "Computer Science Engineering Student",
  bio: "Passionate about creating immersive web experiences and solving real-world problems through innovative technology. Currently pursuing B.Tech in Computer Science with a focus on AI, 3D graphics, and full-stack development.",
  education: "B.Tech Computer Science Engineering",
  university: "Indian Institute of Technology",
  year: "2022 - 2026",
  location: "Bangalore, India",
  email: "alex.morgan@iit.edu",
  phone: "+91 98765 43210"
};

// Skills Data
const skills = [
  { name: "Web Development", level: 90 },
  { name: "3D Graphics", level: 85 },
  { name: "Machine Learning", level: 75 },
  { name: "UI/UX Design", level: 80 },
  { name: "Mobile Development", level: 70 }
];

// Experience Data
const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "TechSolutions Inc.",
    period: "Jun 2024 - Aug 2024",
    description: "Developed responsive web applications using React and Tailwind CSS."
  },
  {
    role: "Open Source Contributor",
    company: "React Community",
    period: "Jan 2024 - Present",
    description: "Contributed to open-source projects and created custom React components."
  }
];

// 3D Scene Component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingOrb position={[-3, 2, -2]} color="#8b5cf6" speed={2} />
      <FloatingOrb position={[4, -1, 3]} color="#06b6d4" speed={1.5} />
      <FloatingOrb position={[0, 4, 0]} color="#10b981" speed={1} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

// Project Card Component
const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
  >
    <div className="relative mb-4 overflow-hidden rounded-xl">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech) => (
        <span key={tech} className={`px-3 py-1 rounded-full text-xs font-medium ${techIcons[tech] || 'bg-gray-600'} text-white`}>
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-3">
      <a href={project.github} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
        <Github size={16} />
        <span className="text-sm">Code</span>
      </a>
      <a href={project.live} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
        <ExternalLink size={16} />
        <span className="text-sm">Live Demo</span>
      </a>
    </div>
  </motion.div>
);

// Skill Bar Component
const SkillBar = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="text-white font-medium">{skill.name}</span>
      <span className="text-purple-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <motion.div 
        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {aboutData.name.split(' ')[0]}
          </motion.div>
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-4 py-2 rounded-lg transition-all hover:text-purple-300 ${
                  activeSection === section ? 'text-purple-400' : 'text-gray-300'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                    layoutId="activeSection"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
            <Scene />
          </Canvas>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Hi, I'm {aboutData.name}
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {aboutData.title}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                View My Work
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {aboutData.bio}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Award className="text-purple-400" size={20} />
                  <span>{aboutData.education} - {aboutData.university}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe className="text-purple-400" size={20} />
                  <span>{aboutData.year}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="text-purple-400" size={20} />
                  <span>{aboutData.location}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-purple-500 pl-4"
                  >
                    <h4 className="font-semibold text-lg">{exp.role}</h4>
                    <p className="text-purple-400">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">Core Competencies</h3>
                {skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(techIcons).map(([tech, color], index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={`${color} rounded-xl p-6 flex flex-col items-center justify-center text-white font-semibold text-lg`}
                  >
                    <div className="mb-2">
                      {tech === 'React' && <Code size={32} />}
                      {tech === 'JavaScript' && <Monitor size={32} />}
                      {tech === 'Python' && <Code size={32} />}
                      {tech === 'Node' && <Globe size={32} />}
                      {tech === 'MongoDB' && <Database size={32} />}
                      {tech === 'ThreeJS' && <Smartphone size={32} />}
                      {tech === 'Tailwind' && <Monitor size={32} />}
                      {tech === 'Framer' && <Code size={32} />}
                    </div>
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-12">
              Have a project in mind or want to discuss opportunities? Let's connect!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.a
              href={`mailto:${aboutData.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300 text-sm">{aboutData.email}</p>
            </motion.a>

            <motion.a
              href={`tel:${aboutData.phone}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300 text-sm">{aboutData.phone}</p>
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Github className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300 text-sm">View My Code</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 {aboutData.name}. Built with React, Three.js, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Mock Database component for MongoDB icon
const Database = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
  </svg>
);
