import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerData = {
    Features: [
      'Plan', 'Build', 'Insights', 'Customer Requests', 'Linear Asks', 'Security', 'Mobile'
    ],
    Product: [
      'Pricing', 'Method', 'Integrations', 'Changelog', 'Documentation', 'Download', 'Switch'
    ],
    Company: [
      'About', 'Customers', 'Careers', 'Now', 'README', 'Quality', 'Brand'
    ],
    Resources: [
      'Developers', 'Status', 'Startups', 'Report vulnerability', 'DPA', 'Privacy', 'Terms'
    ],
    Connect: [
      'Contact us', 'Community', 'X (Twitter)', 'GitHub', 'YouTube'
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer
      className="border-t py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ 
        backgroundColor: 'var(--bg-color)', 
        borderColor: 'var(--border-color)' 
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12"
        >
          <motion.div 
            variants={columnVariants}
            className="col-span-2 sm:col-span-3 lg:col-span-1 mb-8 lg:mb-0"
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="white"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0"
                >
                  <path d="M2.25 14.3c-.04-.19.18-.31.32-.17l7.3 7.3c.14.14.02.36-.17.32-3.68-.86-6.59-3.77-7.45-7.45m-.24-2.93q0 .09.06.15l10.41 10.41s.1.06.15.06c.47-.03.94-.09 1.39-.19.15-.03.21-.22.1-.33L2.52 9.89a.194.194 0 0 0-.33.1c-.09.46-.16.92-.19 1.39Zm.84-3.44c-.03.07-.02.16.04.22L15.84 21.1c.06.06.15.07.22.04.36-.16.7-.34 1.04-.54.09-.06.12-.18.07-.27 0-.01-.02-.03-.03-.04L3.69 6.87a.193.193 0 0 0-.28 0c-.01.01-.02.02-.03.04-.2.33-.38.68-.54 1.04ZM4.54 5.6a.19.19 0 0 1 0-.27 9.99 9.99 0 0 1 7.47-3.34c5.53 0 10.01 4.48 10.01 10.01 0 2.97-1.29 5.63-3.34 7.47-.08.07-.2.07-.27 0L4.53 5.61Z"></path>
                </svg>
              </motion.div>
              <span 
                className="text-xl font-medium"
                style={{ color: 'var(--primary-text)' }}
              >
                Linear
              </span>
            </motion.div>
          </motion.div>

          {Object.entries(footerData).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              variants={columnVariants}
              className="space-y-4"
            >
              <motion.h3 
                className="font-medium text-sm sm:text-base"
                style={{ color: 'var(--primary-text)' }}
                whileHover={{ 
                  x: 2,
                  transition: { duration: 0.2 }
                }}
              >
                {category}
              </motion.h3>
              <motion.ul 
                className="space-y-2 sm:space-y-3"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: categoryIndex * 0.1
                    }
                  }
                }}
              >
                {links.map((link, index) => (
                  <motion.li key={index} variants={linkVariants}>
                    <motion.a
                      href="#"
                      className="text-xs sm:text-sm transition-all duration-200 block"
                      style={{ color: 'var(--secondary-text)' }}
                      whileHover={{ 
                        x: 4,
                        color: 'var(--primary-text)',
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 pt-8 border-t"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-xs sm:text-sm order-2 sm:order-1"
              style={{ color: 'var(--secondary-text)' }}
              whileHover={{ 
                color: 'var(--primary-text)',
                transition: { duration: 0.2 }
              }}
            >
              © 2025 Linear. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {['Privacy', 'Terms', 'Security'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  variants={linkVariants}
                  className="text-xs sm:text-sm transition-all duration-200"
                  style={{ color: 'var(--secondary-text)' }}
                  whileHover={{ 
                    y: -2,
                    color: 'var(--primary-text)',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
