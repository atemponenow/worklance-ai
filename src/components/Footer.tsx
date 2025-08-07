'use client'

import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary-400" />
              <span className="font-bold text-xl">Worklance.AI</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses with cutting-edge AI solutions. 
              Your partner in the AI-driven future.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/worklance_ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/worklance-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/worklance-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Machine Learning</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">AI Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Process Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Computer Vision</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Business Intelligence</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><span className="text-gray-600 text-sm">News & Blog - Coming Soon</span></li>
              <li><span className="text-gray-600 text-sm">Case Studies - Coming Soon</span></li>
              <li><span className="text-gray-600 text-sm">Careers - Coming Soon</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">hello@worklance.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">Tech Valley, CA 94000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Worklance.AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-600 text-sm">Privacy Policy - Coming Soon</span>
            <span className="text-gray-600 text-sm">Terms of Service - Coming Soon</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
