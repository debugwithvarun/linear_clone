import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleHover = (e, entering) => {
    if (entering) {
      e.currentTarget.style.color = 'var(--primary-text)';
      e.currentTarget.style.backgroundColor = 'var(--accent-color)';
    } else {
      e.currentTarget.style.color = 'var(--bg-color)';
      e.currentTarget.style.backgroundColor = 'var(--primary-text)';
    }
  };

  const handleLinkHover = (e, entering) => {
    e.currentTarget.style.color = entering ? 'var(--accent-color)' : 'var(--primary-text)';
  };

  return (
    <section
      className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-8 min-h-[500px] sm:min-h-[600px] w-full"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      <motion.div
        className="w-[68%] max-w-7xl mx-auto px-4 sm:px-0"
        initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="w-full">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl max-md:text-center"
            style={{ color: 'var(--primary-text)' }}
          >
            Linear is a purpose-built tool for planning and building products
          </h1>
          <p
            className="mt-4 sm:mt-6 text-base sm:text-lg max-w-full sm:max-w-md max-md:text-center"
            style={{ color: 'var(--secondary-text)' }}
          >
            Meet the system for modern software development. Streamline issues, projects, and product roadmaps.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button
              type="button"
              className="text-center rounded-xl px-6 py-3 font-medium transition-colors cursor-pointer"
              style={{
                color: 'var(--bg-color)',
                backgroundColor: 'var(--primary-text)',
                border: 'none',
              }}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              Start building
            </button>
            <a
              href="#"
              className="text-center font-medium transition-colors hover:bg-white/[0.05] rounded-xl px-6 py-3 cursor-pointer"
              style={{ color: 'var(--primary-text)' }}
              onMouseEnter={(e) => handleLinkHover(e, true)}
              onMouseLeave={(e) => handleLinkHover(e, false)}
            >
              New: Product Intelligence →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
