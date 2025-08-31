import React from "react";
import { motion } from "framer-motion";

const ModernTeams = () => {
  const features = [
    {
      title: "Purpose-built for product development",
      image: "/box1.png",
    },
    {
      title: "Designed to move fast",
      image: "/box2.png",
    },
    {
      title: "Crafted to perfection",
      image: "/box3.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-6 sm:px-8"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight"
              style={{ color: "var(--primary-text)" }}
            >
              Made for modern product teams
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p
              className="text-base sm:text-lg mb-6 leading-relaxed"
              style={{ color: "var(--secondary-text)" }}
            >
              Linear is shaped by the practices and principles that distinguish
              world-class product teams from the rest: relentless focus, fast
              execution, and a commitment to the quality of craft.
            </p>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 font-medium group w-fit"
              style={{ color: "var(--primary-text)" }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="group-hover:text-white transition-colors">
                Make the switch
              </span>
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Desktop cards */}
        <motion.div
          className="hidden lg:grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div
                className="rounded-2xl p-4 border transition-all duration-300 h-80 hover:shadow-2xl hover:bg-[var(--surface-color)] bg-[var(--bg-color)]"
                style={{
                  borderColor: "var(--border-color)",
                }}
              >
                <div className="relative h-full">
                  <div className="h-56 rounded-lg overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 pt-4 flex justify-between items-end">
                    <h3
                      className="text-xl font-medium pr-4 transition-colors duration-300 group-hover:text-white"
                      style={{ color: "var(--primary-text)" }}
                    >
                      {feature.title}
                    </h3>

                    <motion.div
                      className="w-8 h-8 rounded-full border flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      style={{ borderColor: "var(--secondary-text)" }}
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span
                        className="text-lg leading-none flex items-center justify-center"
                        style={{ color: "var(--secondary-text)" }}
                      >
                        +
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile cards */}
        <motion.div
          className="lg:hidden overflow-x-auto"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                style={{ width: "280px", flexShrink: 0 }}
              >
                <div
                  className="rounded-2xl p-4 border transition-all duration-300 h-80 hover:shadow-2xl hover:shadow-white/10"
                  style={{
                    backgroundColor: "var(--surface-color)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <div className="relative h-full">
                    <div className="h-56 rounded-lg overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 pt-4 flex justify-between items-end">
                      <h3
                        className="text-lg font-medium pr-6 transition-colors duration-300 group-hover:text-white"
                        style={{ color: "var(--primary-text)" }}
                      >
                        {feature.title}
                      </h3>

                      <motion.div
                        className="w-6 h-6 rounded-full border flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        style={{ borderColor: "var(--secondary-text)" }}
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span
                          className="text-sm leading-none flex items-center justify-center"
                          style={{ color: "var(--secondary-text)" }}
                        >
                          +
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernTeams;
