'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact3D() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Let's Work Together
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new opportunities, creative ideas, or how we can bring your vision to life.
              </p>
            </div>
            
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
              >
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300 text-sm">shaunakkundu46@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
              >
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">+91 9082099280</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
              >
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300 text-sm">Maharashtra, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
