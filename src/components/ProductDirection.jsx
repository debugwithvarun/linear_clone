import React from "react";
import { motion } from "framer-motion";

const ProjectOverview = () => {
  return (
    <motion.div
      className="rounded-xl border p-6 h-80"
      style={{ 
        backgroundColor: 'var(--surface-color)',
        borderColor: 'var(--border-color)',
        maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,0.3) 100%)',
        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,0.3) 100%)'
      }}
      initial={{ opacity: 0, rotateX: 15, rotateY: -10 }}
      whileInView={{ opacity: 1, rotateX: 5, rotateY: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <h3 
        className="text-lg font-semibold mb-6"
        style={{ color: 'var(--primary-text)' }}
      >
        Project Overview
      </h3>
      
      <div className="space-y-6">
        <div>
          <h4 
            className="text-sm font-medium mb-3"
            style={{ color: 'var(--secondary-text)' }}
          >
            Properties
          </h4>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <span className="text-sm" style={{ color: 'var(--primary-text)' }}>
                In Progress
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-gray-600 text-white text-xs rounded">ENG</span>
              <div className="flex -space-x-1">
                <div className="w-5 h-5 bg-gray-500 rounded-full border border-gray-300"></div>
                <div className="w-5 h-5 bg-gray-600 rounded-full border border-gray-300"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 
            className="text-sm font-medium mb-3"
            style={{ color: 'var(--secondary-text)' }}
          >
            Resources
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm" style={{ color: 'var(--primary-text)' }}>
                Exploration
              </span>
            </div>
            <div className="flex items-center gap-3 ml-7">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm" style={{ color: 'var(--primary-text)' }}>
                User interviews
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4 
            className="text-sm font-medium mb-3"
            style={{ color: 'var(--secondary-text)' }}
          >
            Milestones
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-sm" style={{ color: 'var(--primary-text)' }}>
                  Design Review
                </span>
              </div>
              <span className="text-sm" style={{ color: 'var(--secondary-text)' }}>
                100%
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-sm" style={{ color: 'var(--primary-text)' }}>
                  Internal Alpha
                </span>
              </div>
              <span className="text-sm" style={{ color: 'var(--secondary-text)' }}>
                100% of 10
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <span className="text-sm" style={{ color: 'var(--primary-text)' }}>
                  GA
                </span>
              </div>
              <span className="text-sm" style={{ color: 'var(--secondary-text)' }}>
                25% of 53
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectUpdates = () => {
  return (
    <div className="relative h-30 w-full ">
        <div className="pt-30 absolute w-full top-10 -rotate-4">
        <motion.div
        className="absolute inset-0 rounded-xl border p-6 group cursor-pointer"
        style={{ 
          backgroundColor: 'var(--surface-color)',
          borderColor: 'var(--border-color)',
          transform: 'perspective(1000px) rotateX(8deg) rotateY(-3deg) translateZ(40deg) translateY(-15px)',
          transformOrigin: 'left top'
        }}
        initial={{ opacity: 0, rotateX: 20, rotateY: -10 }}
        whileInView={{ opacity: 1, rotateX: 6, rotateY: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ 
          y: -50,
        
        //   zIndex: 30,
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span 
              className="text-sm font-medium group-hover:text-white transition-colors"
              style={{ color: 'var(--primary-text)' }}
            >
              On track
            </span>
          </div>
          <span 
            className="text-xs"
            style={{ color: 'var(--secondary-text)' }}
          >
            Sep 8
          </span>
        </div>
        <p 
          className="text-sm leading-relaxed group-hover:text-white transition-colors"
          style={{ color: 'var(--secondary-text)' }}
        >
          We are ready to launch next Thursday
        </p>
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-xl border p-6 group cursor-pointer"
        style={{ 
          backgroundColor: 'rgba(34, 34, 34, 0.95)',
          borderColor: 'var(--border-color)',
          transform: 'perspective(1000px) translateX(40deg) rotateY(-50deg) translateZ(70deg) translateY(-500px)',
          transformOrigin: 'right top'
        }}
        initial={{ opacity: 0, rotateX: 25, rotateY: -15 }}
        whileInView={{ opacity: 1, rotateX: 12, rotateY: -15 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ 
          y: -50,
  
       
        //   zIndex: 20,
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span 
              className="text-sm font-medium group-hover:text-white transition-colors"
              style={{ color: 'var(--primary-text)' }}
            >
              At risk
            </span>
          </div>
          <span 
            className="text-xs"
            style={{ color: 'var(--secondary-text)' }}
          >
            Oct
          </span>
        </div>
        <p 
          className="text-sm leading-relaxed group-hover:text-white transition-colors"
          style={{ color: 'var(--secondary-text)' }}
        >
          Progress slowed down last week because...
        </p>
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-xl border p-6 group cursor-pointer"
        style={{ 
          backgroundColor: 'rgba(34, 34, 34, 0.95)',
          borderColor: 'var(--border-color)',
          transform: 'perspective(1000px) translateX(80deg) rotateY(-150deg) translateZ(90deg) translateY(-5000px)',
          transformOrigin: 'right top'
        }}
        initial={{ opacity: 0, rotateX: 25, rotateY: -15 }}
        whileInView={{ opacity: 1, rotateX: 12, rotateY: -25 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ 
          y: -50,
        

        //   zIndex: 20,
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span 
              className="text-sm font-medium group-hover:text-white transition-colors"
              style={{ color: 'var(--primary-text)' }}
            >
              At risk
            </span>
          </div>
          <span 
            className="text-xs"
            style={{ color: 'var(--secondary-text)' }}
          >
            Oct
          </span>
        </div>
        <p 
          className="text-sm leading-relaxed group-hover:text-white transition-colors"
          style={{ color: 'var(--secondary-text)' }}
        >
          Progress slowed down last week because...
        </p>
      </motion.div>
        </div>
    </div>
  );
};

const ProductDirection = () => {
  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8" 
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm" style={{ color: 'var(--secondary-text)' }}>
              Project and long-term planning
            </span>
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-6"
            style={{ color: 'var(--primary-text)' }}
          >
            Set the product direction
          </h1>
          
          <p 
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--secondary-text)' }}
          >
            Align your team around a unified product{' '}
            <span style={{ color: 'var(--primary-text)' }}>timeline</span>. Plan, manage, and track all product initiatives with Linear's visual planning tools.
          </p>
        </motion.div>

        <motion.div
          className="mb-20 rounded-2xl overflow-hidden flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img 
            src="/1.png" 
            alt="Product roadmap timeline"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 
              className="text-xl font-semibold mb-3"
              style={{ color: 'var(--primary-text)' }}
            >
              Manage projects end-to-end
            </h3>
            <p 
              className="text-base mb-8 leading-relaxed"
              style={{ color: 'var(--secondary-text)' }}
            >
              Consolidate specs, milestones, tasks, and other documentation in one centralized location.
            </p>
            <ProjectOverview />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 
              className="text-xl font-semibold mb-3"
              style={{ color: 'var(--primary-text)' }}
            >
              Project updates
            </h3>
            <p 
              className="text-base mb-8 leading-relaxed"
              style={{ color: 'var(--secondary-text)' }}
            >
              Communicate progress and project health with built-in project updates.
            </p>
            <ProjectUpdates />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 
              className="text-xl font-semibold mb-6"
              style={{ color: 'var(--primary-text)' }}
            >
              Ideate and specify what to build next
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1 h-5 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <div 
                    className="font-medium text-base"
                    style={{ color: 'var(--primary-text)' }}
                  >
                    Collaborative documents
                  </div>
                </div>
              </div>
              
              <div className="pl-4 space-y-2">
                <div 
                  className="text-base"
                  style={{ color: 'var(--secondary-text)' }}
                >
                  Inline comments
                </div>
                <div 
                  className="text-base"
                  style={{ color: 'var(--secondary-text)' }}
                >
                  Text-to-issue commands
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl border p-6"
            style={{ 
              backgroundColor: 'var(--surface-color)',
              borderColor: 'var(--border-color)'
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">👥</span>
              </div>
              <span 
                className="font-medium"
                style={{ color: 'var(--primary-text)' }}
              >
                Collaborate on ideas
              </span>
            </div>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: 'var(--secondary-text)' }}
            >
              Write down product ideas and work together on feature specs in realtime, multiplayer product documents. Add **style** and ##structure with rich-text formatting options.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          <motion.div>
            <div className="w-8 h-8 mx-auto mb-4 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" fill="currentColor" style={{ color: 'var(--primary-text)' }}/>
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" style={{ color: 'var(--primary-text)' }}/>
              </svg>
            </div>
            <h4 
              className="font-medium mb-2 text-sm"
              style={{ color: 'var(--primary-text)' }}
            >
              Initiatives
            </h4>
            <p 
              className="text-xs leading-relaxed"
              style={{ color: 'var(--secondary-text)' }}
            >
              Coordinate strategic product efforts.
            </p>
          </motion.div>

          <motion.div>
            <div className="w-8 h-8 mx-auto mb-4 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" style={{ color: 'var(--primary-text)' }}/>
                <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" style={{ color: 'var(--primary-text)' }}/>
                <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" style={{ color: 'var(--primary-text)' }}/>
                <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" style={{ color: 'var(--primary-text)' }}/>
              </svg>
            </div>
            <h4 
              className="font-medium mb-2 text-sm"
              style={{ color: 'var(--primary-text)' }}
            >
              Cross-team projects
            </h4>
            <p 
              className="text-xs leading-relaxed"
              style={{ color: 'var(--secondary-text)' }}
            >
              Collaborate across teams and departments.
            </p>
          </motion.div>

          <motion.div>
            <div className="w-8 h-8 mx-auto mb-4 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="currentColor" style={{ color: 'var(--primary-text)' }}/>
              </svg>
            </div>
            <h4 
              className="font-medium mb-2 text-sm"
              style={{ color: 'var(--primary-text)' }}
            >
              Milestones
            </h4>
            <p 
              className="text-xs leading-relaxed"
              style={{ color: 'var(--secondary-text)' }}
            >
              Break projects down into concrete phases.
            </p>
          </motion.div>

          <motion.div>
            <div className="w-8 h-8 mx-auto mb-4 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" fill="none" style={{ color: 'var(--primary-text)' }}/>
                <path d="m19 9-5 5-4-4-3 3" stroke="currentColor" strokeWidth="2" fill="none" style={{ color: 'var(--primary-text)' }}/>
              </svg>
            </div>
            <h4 
              className="font-medium mb-2 text-sm"
              style={{ color: 'var(--primary-text)' }}
            >
              Progress insights
            </h4>
            <p 
              className="text-xs leading-relaxed"
              style={{ color: 'var(--secondary-text)' }}
            >
              Track scope, velocity, and progress over time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDirection;
