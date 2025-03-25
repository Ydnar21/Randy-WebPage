import React from 'react';
import { ArrowLeft, Shield, Target, Award, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-gray-800 rounded-lg p-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-300">Randy Dickersbach - Diverse Cybersecurity Professional</p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-cyan-400" />
                Mission Statement
              </h2>
              <p className="text-gray-300">
                As a cybersecurity professional, my mission is to protect organizations and individuals from emerging digital threats. I specialize in implementing robust security measures, conducting thorough vulnerability assessments, and developing comprehensive security strategies that safeguard critical assets and data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-cyan-400" />
                Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Security Architecture</h3>
                  <p className="text-gray-300">Designing and implementing secure network infrastructures and security frameworks.</p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Incident Response</h3>
                  <p className="text-gray-300">Leading incident response teams and developing incident management protocols.</p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Risk Assessment</h3>
                  <p className="text-gray-300">Conducting thorough security audits and vulnerability assessments.</p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Security Training</h3>
                  <p className="text-gray-300">Developing and delivering security awareness programs for organizations.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Book className="w-6 h-6 mr-2 text-cyan-400" />
                Professional Background
              </h2>
              <div className="bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-300">
                  With about 5 years of new development of CyberSecurity experience, I've worked with organizations across various sectors to strengthen their security posture. My approach combines technical expertise with strategic thinking to deliver comprehensive security solutions that address both current and emerging threats.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <span className="w-32 text-cyan-400">Certifications:</span>
                    <span className="text-gray-300">Google Cybersecurity Professional Certification, IBM DevSecOps, Security Principles in Cloud COmputing from Google Cloud</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-32 text-cyan-400">Industries:</span>
                    <span className="text-gray-300">TD Bank - Third Party Risk Assessments, CSC - Web Application Security, Square10 Technologies - Cyber Security Consulting, Battelle - Private Governement Contracting Company, Raytheon's Patriot Missle System - Cyber Engineer </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-32 text-cyan-400">Specialties:</span>
                    <span className="text-gray-300">Penetration Testing, Security Architecture, Compliance, Problem Solving</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
