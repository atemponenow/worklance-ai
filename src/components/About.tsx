'use client'

import { motion } from 'framer-motion'
import { Users, Target, Lightbulb, Award } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We exist to democratize AI technology and make it accessible to businesses of all sizes.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Constantly pushing boundaries with cutting-edge AI research and development.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships, not just solutions.'
    },
    {
      icon: Award,
      title: 'Excellence Standard',
      description: 'Uncompromising quality in every project, backed by rigorous testing and validation.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                About <span className="gradient-text">Worklance.AI</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are a forward-thinking AI company dedicated to transforming businesses 
                through innovative artificial intelligence solutions.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Founded by a team of AI researchers and industry veterans, Worklance.AI bridges 
                the gap between cutting-edge AI research and practical business applications. 
                We believe that AI should enhance human capabilities, not replace them.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our diverse team combines deep technical expertise with extensive business 
                experience, enabling us to deliver solutions that are both technically 
                sophisticated and commercially viable.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600">Expert Team Members</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Values</h3>
            
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our <span className="gradient-text">Leadership Team</span>
            </h3>
            <p className="text-xl text-gray-600">
              Experienced professionals driving AI innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Chen', role: 'Chief Technology Officer', expertise: 'Machine Learning & AI Research' },
              { name: 'Michael Rodriguez', role: 'Chief Executive Officer', expertise: 'Business Strategy & Operations' },
              { name: 'Emily Watson', role: 'Head of Data Science', expertise: 'Advanced Analytics & Modeling' }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-4"></div>
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
