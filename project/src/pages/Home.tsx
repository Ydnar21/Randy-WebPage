import React from 'react';
import { Shield, Lock, Server, AlertCircle, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="z-10 text-center px-4">
          <Shield className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
          <h1 className="text-5xl font-bold mb-4">Cybersecurity Professional</h1>
          <p className="text-xl text-gray-300 mb-8">Protecting Digital Assets & Securing the Future</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact" 
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10 font-semibold text-white group-hover:text-white/90">Get in Touch</span>
            </Link>
            <Link 
              to="/about" 
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10 font-semibold text-white group-hover:text-white/90">About Me</span>
            </Link>
            <Link 
              to="/consulting" 
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10 font-semibold text-white group-hover:text-white/90">Consulting Services</span>
            </Link>
            <Link 
              to="/projects" 
              className="group relative px-8 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 border border-cyan-500/30 hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10 font-semibold text-cyan-400 group-hover:text-cyan-300">View Projects</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lock, title: 'Network Security', desc: 'Implementing robust security protocols and network protection' },
              { icon: Server, title: 'System Hardening', desc: 'Strengthening system defenses against potential threats' },
              { icon: AlertCircle, title: 'Threat Detection', desc: 'Advanced monitoring and incident response' },
              { icon: Database, title: 'Data Protection', desc: 'Securing sensitive information and ensuring compliance' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
                <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;