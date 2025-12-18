import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-secondary/50 backdrop-blur-sm py-8 px-8 mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            © {currentYear} Luiss.dev - Todos los derechos reservados
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@luiss.dev"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
