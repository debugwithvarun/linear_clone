import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const MaskedCard = ({ children, className = "", ...props }) => {
  const maskStyle = {
    WebkitMaskImage: `
      linear-gradient(to bottom, var(--mask-visible) 60%, var(--mask-invisible) 100%),
      linear-gradient(to right, var(--mask-visible) 40%, var(--mask-invisible) 100%)
    `,
    maskImage: `
      linear-gradient(to bottom, var(--mask-visible) 60%, var(--mask-invisible) 100%),
      linear-gradient(to right, var(--mask-visible) 40%, var(--mask-invisible) 100%)
    `,
    WebkitMaskComposite: "source-in",
    maskComposite: "intersect",
  };

  return (
    <motion.div
      className={`rounded-xl border p-6 ${className}`}
      style={{
        backgroundColor: "var(--surface-color)",
        borderColor: "var(--border-color)",
        ...maskStyle,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const ProjectOverview = () => {
  return (
    <MaskedCard
      className="h-80"
      initial={{ opacity: 0, rotateX: 15, rotateY: -10 }}
      whileInView={{ opacity: 1, rotateX: 5, rotateY: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h3
        className="text-lg font-semibold mb-6"
        style={{ color: "var(--primary-text)" }}
      >
        Project Overview
      </h3>

      <div className="space-y-6">
        <div>
          <h4
            className="text-sm font-medium mb-3"
            style={{ color: "var(--secondary-text)" }}
          >
            Properties
          </h4>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <span
                className="text-sm"
                style={{ color: "var(--primary-text)" }}
              >
                In Progress
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-gray-600 text-white text-xs rounded">
                ENG
              </span>
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
            style={{ color: "var(--secondary-text)" }}
          >
            Resources
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span
                className="text-sm"
                style={{ color: "var(--primary-text)" }}
              >
                Exploration
              </span>
            </div>
            <div className="flex items-center gap-3 ml-7">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span
                className="text-sm"
                style={{ color: "var(--primary-text)" }}
              >
                User interviews
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4
            className="text-sm font-medium mb-3"
            style={{ color: "var(--secondary-text)" }}
          >
            Milestones
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span
                  className="text-sm"
                  style={{ color: "var(--primary-text)" }}
                >
                  Design Review
                </span>
              </div>
              <span
                className="text-sm"
                style={{ color: "var(--secondary-text)" }}
              >
                100%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span
                  className="text-sm"
                  style={{ color: "var(--primary-text)" }}
                >
                  Internal Alpha
                </span>
              </div>
              <span
                className="text-sm"
                style={{ color: "var(--secondary-text)" }}
              >
                100% of 10
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <span
                  className="text-sm"
                  style={{ color: "var(--primary-text)" }}
                >
                  GA
                </span>
              </div>
              <span
                className="text-sm"
                style={{ color: "var(--secondary-text)" }}
              >
                25% of 53
              </span>
            </div>
          </div>
        </div>
      </div>
    </MaskedCard>
  );
};

const ProjectUpdates = () => {
  const cardContent = [
    {
      title: "Off track",
      desc: "This project is off track and needs immediate attention.",
      date: "Oct 08",
      color: "green",
    },
    {
      title: "At Risk",
      desc: "This project is at risk of falling behind.",
      date: "Oct 08",
      color: "orange",
    },
    {
      title: "On Track",
      desc: "This project is on track to meet its goals.",
      date: "Oct 08",
      color: "red",
    },
  ];
  return (
    <div className="relative w-full h-[300px]">
      <div className="absolute w-full top-25 [perspective:1100px] left-20 ">
        {cardContent.map((item, index) => (
          
          <motion.div
            key={index}
            className={`absolute flex flex-col mt-10 justify-start px-6 py-3
              border border-white/10 rounded-xl w-[90%]
              bg-gradient-to-br from-[var(--surface-color)]/100 to-[var(--surface-color)]/100
              backdrop-blur-sm shadow-lg shadow-black/30
              transform-gpu transition-all duration-300 hover:-translate-y-10 ${index!==0 ?"grayscale hover:grayscale-0":""}`}

            style={{
              top: `-${(index + 1) * 25}px`,
              left: `${index * 30}px`,
             
              transform: `rotateY(45deg) rotate(-2deg) translate(-${
                index * 20
              }px) translateX(-${index * 45}px)`,
              WebkitMaskImage:
              "linear-gradient(to right, black 40%, transparent), linear-gradient(to bottom, black 100%, transparent)",
            WebkitMaskComposite: "destination-in",
            maskComposite: "intersect",
      

              zIndex: cardContent.length - index,
            }}
          >
            <div style={{ color: item.color }} className="text-md font-bold">
              {item.title}
            </div>

            <div
              className="mt-2 text-md"
              style={{ color: "var(--primary-text)" }}
            >
              {item.desc}
            </div>

            <div
              className="mt-4 text-md"
              style={{ color: "var(--secondary-text)" }}
            >
              {item.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ProductDirection = () => {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span
              className="text-sm"
              style={{ color: "var(--secondary-text)" }}
            >
              Project and long-term planning
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-6"
            style={{ color: "var(--primary-text)" }}
          >
            Set the product direction
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--secondary-text)" }}
          >
            Align your team around a unified product{" "}
            <span style={{ color: "var(--primary-text)" }}>timeline</span>.
            Plan, manage, and track all product initiatives with Linear's visual
            planning tools.
          </p>
        </motion.div>

        {/* Demo Image */}
        <motion.div
          className="mb-20 rounded-2xl overflow-hidden flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/1.png"
            alt="Product roadmap timeline"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Two Cards Row */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--primary-text)" }}
            >
              Manage projects end-to-end
            </h3>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "var(--secondary-text)" }}
            >
              Consolidate specs, milestones, tasks, and other documentation in
              one centralized location.
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
              style={{ color: "var(--primary-text)" }}
            >
              Project updates
            </h3>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "var(--secondary-text)" }}
            >
              Communicate progress and project health with built-in project
              updates.
            </p>
            <ProjectUpdates />
          </motion.div>
        </div>

        {/* Idea Box */}
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
              style={{ color: "var(--primary-text)" }}
            >
              Ideate and specify what to build next
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1 h-5 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <div
                    className="font-medium text-base"
                    style={{ color: "var(--primary-text)" }}
                  >
                    Collaborative documents
                  </div>
                </div>
              </div>

              <div className="pl-4 space-y-2">
                <div
                  className="text-base"
                  style={{ color: "var(--secondary-text)" }}
                >
                  Inline comments
                </div>
                <div
                  className="text-base"
                  style={{ color: "var(--secondary-text)" }}
                >
                  Text-to-issue commands
                </div>
              </div>
            </div>
          </motion.div>

          <MaskedCard
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4 mt-4">
              <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">👥</span>
              </div>
              <span
                className="font-medium"
                style={{ color: "var(--primary-text)" }}
              >
                Collaborate on ideas
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--secondary-text)" }}
            >
              Write down product ideas and work together on feature specs in
              realtime, multiplayer product documents. Add <b>style</b> and{" "}
              <b>structure</b> with rich-text formatting options.
            </p>
          </MaskedCard>
        </div>
      </div>
    </section>
  );
};

export default ProductDirection;
