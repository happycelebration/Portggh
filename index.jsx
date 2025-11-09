import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Download, Code, GraduationCap, Menu, X, ExternalLink, ChevronDown } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce website with React, Node.js, and MongoDB featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application built with React and Firebase, enabling real-time updates and team collaboration.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard using OpenWeatherMap API with location-based weather forecasts and interactive charts.",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API", "Chart.js"],
      link: "#"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Python", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "MongoDB", level: 70 },
    { name: "Git", level: 85 },
    { name: "SQL", level: 75 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-purple-300 ${
                    activeSection === item ? 'text-purple-400 font-semibold' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-300 hover:text-purple-300 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <GraduationCap className="w-16 h-16 text-purple-400" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Rahul Sharma</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              B.Tech Computer Science Student & Aspiring Full-Stack Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-purple-500 hover:bg-purple-500/20 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown 
              size={32} 
              className="mx-auto text-purple-400 cursor-pointer" 
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Computer Science Engineering student with a strong foundation in programming, 
                data structures, and software development. Currently pursuing my B.Tech degree and actively 
                working on building real-world applications to enhance my technical skills.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm deeply interested in web development, particularly in creating responsive and user-friendly 
                interfaces. My goal is to contribute to innovative projects that solve real-world problems 
                while continuously learning and growing as a developer.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Code className="text-purple-400" />
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-purple-400" />
                  <span>B.Tech CSE Student</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">B.Tech in Computer Science</h4>
                  <p className="text-gray-400">XYZ University • 2022 - 2026</p>
                  <p className="text-sm text-gray-500">CGPA: 8.5/10</p>
                </div>
                <div>
                  <h4 className="font-semibold">Senior Secondary (12th)</h4>
                  <p className="text-gray-400">ABC School • 2020 - 2022</p>
                  <p className="text-sm text-gray-500">Percentage: 88%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-bold mb-3 text-purple-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a 
              href="mailto:rahul.sharma@email.com" 
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50"
            >
              <Mail className="text-purple-400" />
              <span>rahul.sharma@email.com</span>
            </a>
            <a 
              href="https://github.com" 
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50"
            >
              <Github className="text-purple-400" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50"
            >
              <Linkedin className="text-purple-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="text-gray-400">
            <p>Available for freelance work and full-time opportunities</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Rahul Sharma. All rights reserved.</p>
          <p className="mt-2">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
