import React from 'react';
import { ArrowLeft, Shield, Search, FileCheck, Users, Clock, Laptop, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

function Consulting() {
  const services = [
    {
      icon: Search,
      title: 'Security Assessments',
      description: 'Comprehensive evaluation of your security posture, including vulnerability assessments, penetration testing, and risk analysis.',
      features: ['Network Security Analysis', 'Application Security Testing', 'Cloud Security Assessment', 'Compliance Gap Analysis']
    },
    {
      icon: FileCheck,
      title: 'Security Strategy & Planning & Implementation',
      description: 'Development of tailored security roadmaps and strategies aligned with your objectives and risk tolerance.',
      features: ['Security Architecture Design', 'Policy Development', 'Compliance Planning', 'Risk Management Framework']
    },
    {
      icon: Users,
      title: 'Security Training',
      description: 'Able to breakdown more complex ideas to help everyone understand what is going on',
      features: ['Awareness', 'Incident Response Training', 'Social Engineering Defense']
    },
    {
      icon: Clock,
      title: 'Incident Response Planning',
      description: 'Preparation and planning for security incidents, including response strategies and recovery procedures.',
      features: ['Response Plan Development', 'Team Training', 'Tabletop Exercises', 'Recovery Planning']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <Shield className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
          <h1 className="text-4xl font-bold mb-4">Cybersecurity Consulting Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert guidance and solutions to protect your organization from evolving cyber threats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition duration-300">
              <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Laptop className="w-6 h-6 mr-2 text-cyan-400" />
            Engagement Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">1. Assessment</h3>
              <p className="text-gray-300">Initial evaluation of your security needs and objectives through detailed consultation.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">2. Strategy Development</h3>
              <p className="text-gray-300">Creation of customized security solutions tailored to your specific requirements.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">3. Implementation</h3>
              <p className="text-gray-300">Execution of security measures with ongoing support and adjustments.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Brain className="w-6 h-6 mr-2 text-cyan-400" />
            Why Choose My Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-gray-300">✓ Over 10 years of industry experience</p>
              <p className="text-gray-300">✓ Certified security professional (CISSP, CEH)</p>
              <p className="text-gray-300">✓ Tailored solutions for your specific needs</p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">✓ Proven track record of success</p>
              <p className="text-gray-300">✓ Up-to-date with latest security trends</p>
              <p className="text-gray-300">✓ Comprehensive support and follow-up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consulting;