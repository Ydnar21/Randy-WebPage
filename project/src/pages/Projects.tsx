import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      title: 'Security Infrastructure Upgrade',
      desc: 'Led a comprehensive security infrastructure upgrade for a Fortune 500 company, implementing state-of-the-art security measures and protocols to protect against modern cyber threats.',
      tech: ['Network Security', 'Firewall Configuration', 'IDS/IPS'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'Threat Detection System',
      desc: 'Developed an AI-powered threat detection system for real-time monitoring, leveraging machine learning algorithms to identify and respond to potential security breaches.',
      tech: ['Machine Learning', 'Python', 'Security Analytics'],
      image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'Security Awareness Program',
      desc: 'Created and implemented a company-wide security awareness training program, educating employees about cybersecurity best practices and reducing security incidents by 75%.',
      tech: ['Training', 'Social Engineering', 'Policy Development'],
      image: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-12">Featured Projects</h1>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-300 mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;