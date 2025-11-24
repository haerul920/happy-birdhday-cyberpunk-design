import { motion } from "motion/react";
import { Calendar, Clock, Zap, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { MessageModal } from "./MessageModal";

export function CyberpunkUI() {
  const [time, setTime] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MessageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Top left corner UI */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-6 left-6 flex flex-row items-center gap-4 z-50"
      >
        {/* Date display */}
        <div
          className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-fuchsia-500/50 rounded-lg backdrop-blur-sm"
          style={{
            boxShadow: "0 0 10px rgba(236, 72, 153, 0.3)",
          }}
        >
          <Calendar className="w-4 h-4 text-fuchsia-400" />
          <span className="text-sm text-cyan-300 font-mono">
            {time.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Time display */}
        <div
          className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-cyan-500/50 rounded-lg backdrop-blur-sm"
          style={{
            boxShadow: "0 0 10px rgba(34, 211, 238, 0.3)",
          }}
        >
          <Clock className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-fuchsia-300 font-mono">
            {time.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </span>
        </div>

        {/* Status indicator */}
        <div
          className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-green-500/50 rounded-lg backdrop-blur-sm"
          style={{
            boxShadow: "0 0 10px rgba(34, 197, 94, 0.3)",
          }}
        >
          <motion.div
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Zap className="w-4 h-4 text-green-400" />
          </motion.div>
          <span className="text-sm text-green-300 font-mono">
            SYSTEM ACTIVE
          </span>
        </div>
      </motion.div>

      {/* Top right corner UI */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-black/50 border border-fuchsia-500/50 rounded-lg backdrop-blur-sm cursor-pointer group hover:bg-fuchsia-500/10 transition-colors"
          style={{
            boxShadow: "0 0 10px rgba(236, 72, 153, 0.3)",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="w-3 h-3 text-cyan-300" />
            <div className="text-xs text-cyan-300 font-mono font-bold group-hover:text-cyan-200">
              MESSAGE
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-4 bg-gradient-to-t from-fuchsia-500 to-cyan-500 rounded-sm"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                style={{
                  transformOrigin: "bottom",
                  opacity: 0.8,
                }}
              />
            ))}
          </div>
        </motion.button>
      </motion.div>

      {/* Bottom left corner - decorative lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-6 left-6 space-y-2"
      >
        {[100, 70, 90, 60].map((width, i) => (
          <motion.div
            key={i}
            className="h-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-transparent"
            style={{ width: `${width}px` }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Bottom right corner - decorative lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-6 right-6 space-y-2 flex flex-col items-end"
      >
        {[100, 70, 90, 60].map((width, i) => (
          <motion.div
            key={i}
            className="h-1 rounded-full bg-gradient-to-l from-cyan-500 to-transparent"
            style={{ width: `${width}px` }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Corner brackets - top left */}
      <svg
        className="absolute top-0 left-0 w-20 h-20 text-fuchsia-500/50"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M 30 0 L 0 0 L 0 30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </svg>

      {/* Corner brackets - top right */}
      <svg
        className="absolute top-0 right-0 w-20 h-20 text-cyan-500/50"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M 70 0 L 100 0 L 100 30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </svg>

      {/* Corner brackets - bottom left */}
      <svg
        className="absolute bottom-0 left-0 w-20 h-20 text-cyan-500/50"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M 0 70 L 0 100 L 30 100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </svg>

      {/* Corner brackets - bottom right */}
      <svg
        className="absolute bottom-0 right-0 w-20 h-20 text-fuchsia-500/50"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M 100 70 L 100 100 L 70 100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </svg>
    </>
  );
}
