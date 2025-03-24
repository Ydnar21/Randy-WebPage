import React from 'react';
import { Mail, Github, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-gray-800 rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Let's Connect</h1>
          
          <div className="space-y-8">
            <p className="text-gray-300 text-center text-lg">
              Interested in cybersecurity consulting or collaboration? Let's discuss how we can work together.
            </p>

            <div className="flex justify-center space-x-8">
              <a href="mailto:your.email@example.com" className="flex flex-col items-center hover:text-cyan-400 transition group">
                <Mail className="w-10 h-10 mb-2" />
                <span>Email</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-cyan-400 transition group">
                <Github className="w-10 h-10 mb-2" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-cyan-400 transition group">
                <Linkedin className="w-10 h-10 mb-2" />
                <span>LinkedIn</span>
              </a>
            </div>

            <form className="max-w-lg mx-auto space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;