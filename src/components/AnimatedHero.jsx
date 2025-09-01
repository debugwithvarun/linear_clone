import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => (
  <motion.aside
    className="min-w-64 flex flex-col border-r max-sm:ml-10"
    initial={{ opacity: 0, x: 500, z: 500, y: -500 }}
    whileInView={{ opacity: 1, x: 0, z: 0, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    style={{ borderColor: "var(--border-color)" }}
  >
    <div
      className="flex items-center gap-2 p-4 border-b"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="w-6 h-6 rounded bg-white"></div>
      <span className="font-semibold" style={{ color: "var(--primary-text)" }}>
        Linear
      </span>
      <button className="ml-auto" style={{ color: "var(--secondary-text)" }}>
        ⌄
      </button>
    </div>

    <nav className="flex-1 p-4 space-y-2">
      <div
        className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-opacity-10"
        style={{
          color: "var(--primary-text)",
          backgroundColor: "var(--accent-color)",
        }}
      >
        <span>📥</span>
        <span>Inbox</span>
        <span className="ml-auto text-xs bg-gray-600 px-1.5 py-0.5 rounded">
          1
        </span>
      </div>

      <div
        className="flex items-center gap-2 px-2 py-1.5 rounded"
        style={{ color: "var(--secondary-text)" }}
      >
        <span>📋</span>
        <span>My issues</span>
      </div>

      <div className="pt-4">
        <div
          className="flex items-center gap-2 px-2 py-1 text-sm"
          style={{ color: "var(--secondary-text)" }}
        >
          <span>Workspace</span>
          <button>⌄</button>
        </div>
        <div className="ml-2 mt-2 space-y-1">
          <div
            className="flex items-center gap-2 px-2 py-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <span>🎯</span>
            <span>Initiatives</span>
          </div>
          <div
            className="flex items-center gap-2 px-2 py-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <span>📁</span>
            <span>Projects</span>
          </div>
          <div
            className="flex items-center gap-2 px-2 py-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <span>👁️</span>
            <span>Views</span>
          </div>
          <div
            className="flex items-center gap-2 px-2 py-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <span>👥</span>
            <span>Teams</span>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div
          className="flex items-center gap-2 px-2 py-1 text-sm"
          style={{ color: "var(--secondary-text)" }}
        >
          <span>Favorites</span>
          <button>⌄</button>
        </div>
        <div className="ml-2 mt-2 space-y-1">
          <div
            className="flex items-center gap-2 px-2 py-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <span>📱</span>
            <span>Mobile App</span>
          </div>
          <div
            className="flex items-center gap-2 px-2 py-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <span>🗺️</span>
            <span>3Q24 Roadmap</span>
          </div>
          <div
            className="flex items-center gap-2 px-2 py-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <span>📁</span>
            <span>Projects</span>
            <button>⌄</button>
          </div>
          <div
            className="flex items-center gap-2 px-2 py-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <span>📄</span>
            <span>Docs</span>
            <button>⌄</button>
          </div>
        </div>
      </div>
    </nav>
  </motion.aside>
);

const MainContent = () => (
  <div className="flex-1 flex">
    <motion.div
      className="w-80 max-md:w-50 border-r flex flex-col"
      style={{
        backgroundColor: "var(--surface-color)",
        borderColor: "var(--border-color)",
      }}
      initial={{ opacity: 0, x: 500, z: 500, y: -500 }}
      whileInView={{ opacity: 1, x: 0, z: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <div
        className="p-4 border-b"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div className="flex items-center gap-2">
          <span
            style={{ color: "var(--primary-text)" }}
            className="font-semibold"
          >
            Inbox
          </span>
          <div className="flex gap-2 ml-auto">
            <button style={{ color: "var(--secondary-text)" }}>☰</button>
            <button style={{ color: "var(--secondary-text)" }}>#</button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-1">
          <div
            className="p-3 rounded hover:bg-opacity-5"
            style={{ backgroundColor: "var(--surface-color)" }}
          >
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center text-xs">
                ENG
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span
                    style={{ color: "var(--primary-text)" }}
                    className="font-medium max-md:text-[12px]"
                  >
                    ENG-135 Refactor sonic crawler
                  </span>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                </div>
                <div
                  style={{ color: "var(--secondary-text)" }}
                  className="text-sm max-md:text-[10px]"
                >
                  nan assigned you
                </div>
                <div
                  style={{ color: "var(--secondary-text)" }}
                  className="text-xs mt-1"
                >
                  2h
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center text-xs">
                LLM
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 max-md:text-[12px]">
                  <span style={{ color: "var(--secondary-text)" }}>
                    LLM Chatbot
                  </span>
                  <button className="w-4 h-4 bg-blue-500 rounded text-xs text-white">
                    +
                  </button>
                </div>
                <div
                  style={{ color: "var(--secondary-text)" }}
                  className="text-sm max-md:text-[10px]"
                >
                  New project update by raissa
                </div>
                <div
                  style={{ color: "var(--secondary-text)" }}
                  className="text-xs mt-1"
                >
                  8h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 500, z: 500, y: -500 }}
      whileInView={{ opacity: 1, x: 0, z: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex-1 flex flex-col"
      style={{ backgroundColor: "var(--surface-color)" }}
    >
      <div
        className="p-4 border-b"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded max-[850px]:text-[10px]">
            🔧 Engineering
          </span>
          <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded max-[850px]:text-[10px]">
            🌾 Spice harvester
          </span>
          <span
            style={{ color: "var(--secondary-text)" }}
            className="max-[850px]:text-[10px]"
          >
            ENG-135
          </span>
          <div className="ml-auto flex gap-2 max-[850px]:hidden">
            <button style={{ color: "var(--secondary-text)" }}>
              🗑️ Delete notification
            </button>
            <button style={{ color: "var(--secondary-text)" }}>👤 Sync</button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <h1
          style={{ color: "var(--primary-text)" }}
          className="text-2xl font-bold mb-4"
        >
          Refactor sonic crawler
        </h1>

        <p style={{ color: "var(--secondary-text)" }} className="mb-4">
          <span className="bg-gray-800 px-2 py-1 rounded text-sm">
            Comment.documentContent
          </span>{" "}
          is defined wrongly. It should be a{" "}
          <span className="bg-gray-800 px-2 py-1 rounded text-sm">
            LazyManyToOne
          </span>{" "}
          relation.
        </p>

        <div
          className="bg-gray-900 p-4 rounded mb-4 text-sm font-mono"
          style={{ backgroundColor: "var(--surface-color)" }}
        >
          <div style={{ color: "var(--secondary-text)" }}>
            /** The document content that this comment is associated with. */
          </div>
          <div style={{ color: "var(--secondary-text)" }}>
            @ManyToOne (() ={">"} DocumentContent, "comments", &#123; optional:{" "}
            <span style={{ color: "var(--accent-color)" }}>true</span>, nullable:{" "}
            <span style={{ color: "var(--accent-color)" }}>false</span>, indexed:{" "}
            <span style={{ color: "var(--accent-color)" }}>true</span> &#125;)
          </div>
          <div style={{ color: "var(--secondary-text)" }}>
            <span style={{ color: "var(--accent-color)" }}>public</span>{" "}
            documentContent?: DocumentContent;
          </div>
        </div>

        <p style={{ color: "var(--secondary-text)" }} className="mb-4">
          We would be accessing{" "}
          <span className="bg-gray-800 px-2 py-1 rounded text-sm">
            CachedPromise&lt;DocumentContent&gt;
          </span>{" "}
          then, and document content would be hydrated on property touch.
        </p>

        <p style={{ color: "var(--secondary-text)" }}>
          <span className="bg-gray-800 px-2 py-1 rounded text-sm">
            comment.documentContent.value
          </span>{" "}
          would still be undefined until hydrated, so we'd have to handle
          appropriately.
        </p>
      </div>
    </motion.div>
  </div>
);

const AnimatedHero = () => {
  return (
    <div className="w-full pt-[100px] max-[850px]:w-[250%]">
      <div
        className="flex justify-center w-full border border-white/10 p-2 scale-[1.3] max-[850px]:scale-[1]"
        style={{
          backgroundColor: "var(--bg-color)",
          maskImage: `
            linear-gradient(to bottom, var(--accent-color) 70%, transparent 100%),
            linear-gradient(to right, var(--accent-color) 40%, transparent 100%)
          `,
          WebkitMaskImage: `
            linear-gradient(to bottom, var(--accent-color) 70%, transparent 100%),
            linear-gradient(to right, var(--accent-color) 40%, transparent 100%)
          `,
          WebkitMaskComposite: "destination-in",
          maskComposite: "intersect",
          transform:
            "translateX(2%) rotateX(45deg) rotateY(31deg) rotate(324deg)",
          transformOrigin: "top left",
          backfaceVisibility: "hidden",
        }}
      >
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default AnimatedHero;
