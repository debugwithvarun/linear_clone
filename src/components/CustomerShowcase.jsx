import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomerShowcase = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const logoSets = [
    [
      'ramp ↗',
      'OpenAI',
      'scale',
      'BOOM',
      'Cash App',
      'Vercel'
    ],
    [
      'perplexity',
      'SUPPLE',
      'monzo',
      'Raycast',
      'Retool',
      'MERCURY'
    ]
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSet((prev) => (prev + 1) % logoSets.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, logoSets.length]);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ backgroundColor: 'var(--bg-color)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-6xl mx-auto text-center">

        <div className="mb-12 sm:mb-14 md:mb-16">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 sm:mb-4 leading-tight"
            style={{ color: 'var(--primary-text)' }}
          >
            Powering the world's best product teams.
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl"
            style={{ color: 'var(--secondary-text)' }}
          >
            From next-gen startups to established enterprises.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSet}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ 
                opacity: 1, 
                filter: 'blur(0px)',
                transition: { duration: 0.8, ease: "easeOut" }
              }}
              exit={{ 
                opacity: 0, 
                filter: 'blur(10px)',
                transition: { duration: 0.4, ease: "easeIn" }
              }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 items-center justify-items-center"
            >
              {logoSets[currentSet].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-12 sm:h-14 md:h-16 w-full"
                  style={{ minWidth: '100px' }}
                >
                  <span 
                    className="text-lg sm:text-xl md:text-2xl font-medium text-center"
                    style={{ color: 'var(--primary-text)' }}
                  >
                    {logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

        
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                  style={{ 
                    backdropFilter: 'blur(8px)',
                  }}
                />
                
                {/* Meet our customers button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <button
                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors duration-200 text-sm sm:text-base"
                    style={{ 
                      backgroundColor: 'var(--surface-color)',
                      color: 'var(--primary-text)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    Meet our customers →
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CustomerShowcase;
