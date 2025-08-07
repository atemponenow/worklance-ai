'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Database, Zap, Cpu, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'Custom ML models tailored to your business needs, from predictive analytics to recommendation systems.',
    features: ['Predictive Analytics', 'Classification Models', 'Regression Analysis', 'Time Series Forecasting']
  },
  {
    icon: Code,
    title: 'AI-Powered Development',
    description: 'Intelligent software development with AI-assisted coding, automated testing, and smart deployment.',
    features: ['Code Generation', 'Automated Testing', 'Smart Debugging', 'Performance Optimization']
  },
  {
    icon: Database,
    title: 'Data Intelligence',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    features: ['Data Mining', 'Pattern Recognition', 'Real-time Analytics', 'Interactive Dashboards']
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation solutions that adapt and improve over time.',
    features: ['Workflow Automation', 'RPA Solutions', 'Smart Scheduling', 'Adaptive Systems']
  },
  {
    icon: Cpu,
    title: 'Computer Vision',
    description: 'Advanced image and video analysis for quality control, security, and interactive applications.',
    features: ['Object Detection', 'Image Classification', 'Video Analysis', 'OCR Solutions']
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Strategic insights through AI-driven analytics, helping you make data-informed decisions.',
    features: ['Market Analysis', 'Customer Insights', 'Risk Assessment', 'Growth Optimization']
  }
]

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">AI Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations 
            and drive innovation across every aspect of your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-primary-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our AI solutions can drive your success.
            </p>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
