import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus({ type: '', message: '' });
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus({
          type: 'success',
          message: 'Message envoyé avec succès!'
        });
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setSubmitStatus({
          type: 'error',
          message: "Une erreur s'est produite. Veuillez réessayer."
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'chaimaalakhmaiss23@gmail.com',
      href: 'mailto:chaimaalakhmaiss23@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Téléphone',
      value: '+212 697406273',
      href: 'tel:+212697406273'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Localisation',
      value: 'Maroc',
      href: '#'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'LAKHMAISS-CHAIMA',
      href: 'https://github.com/LAKHMAISS-CHAIMA'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Chaima Lakhmaiss',
      href: 'https://www.linkedin.com/in/chaima-lakhmaiss-733a71239/'
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute opportunité de collaboration ou question.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-amber-800 mb-8">
              Mes Coordonnées
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center space-x-4 text-slate-600 hover:text-amber-600 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                    <info.icon className="text-2xl text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-slate-500">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-xl"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-full border ${
                  errors.name ? 'border-red-500' : 'border-slate-200'
                } focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all`}
                placeholder="Votre nom"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-full border ${
                  errors.email ? 'border-red-500' : 'border-slate-200'
                } focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all`}
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-2xl border ${
                  errors.message ? 'border-red-500' : 'border-slate-200'
                } focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none`}
                placeholder="Votre message..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {submitStatus.message && (
              <div className={`p-3 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-full font-medium shadow-md hover:from-amber-700 hover:to-orange-700 transition-all duration-300 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
