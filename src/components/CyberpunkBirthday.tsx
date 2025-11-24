import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NeonSign } from "./NeonSign";
import { CyberpunkUI } from "./CyberpunkUI";
import { ParticleEffect } from "./ParticleEffect";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AgeTimer } from "./AgeTimer";

export function CyberpunkBirthday() {
  const [age, setAge] = useState("21");
  const [showInput, setShowInput] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Cyberpunk City Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1688377051459-aebb99b42bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwbmlnaHQlMjBuZW9ufGVufDF8fHx8MTc2MzgxNTIwMHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cyberpunk city"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Neon glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/30 via-transparent to-cyan-900/20 mix-blend-screen" />
      </div>

      {/* Wet street reflection effect at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
        }}
        animate={{
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-full w-full bg-gradient-to-t from-fuchsia-500/10 via-cyan-500/5 to-transparent" />
      </motion.div>

      {/* Particle effects */}
      <ParticleEffect />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Happy Birthday Neon Sign */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <NeonSign text="HAPPY BIRTHDAY" glitch={glitchEffect} />
        </motion.div>

        {/* Age Timer Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative mt-8"
        >
          <AgeTimer />

          <div className="text-center mt-8 relative">
            {/* Main text */}
            <motion.div
              className="text-cyan-300 font-mono tracking-[0.5em] text-lg md:text-xl uppercase font-bold"
              style={{
                textShadow: "0 0 10px rgba(34,211,238,0.8)",
              }}
              animate={{
                opacity: glitchEffect ? [1, 0.8, 1, 0.9, 1] : 1,
                x: glitchEffect ? [0, -2, 2, -1, 0] : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              your age now
            </motion.div>

            {/* Glitch layer 1 - magenta */}
            {glitchEffect && (
              <motion.div
                className="absolute inset-0 text-fuchsia-500 font-mono tracking-[0.5em] text-lg md:text-xl uppercase font-bold"
                style={{
                  mixBlendMode: "screen",
                  pointerEvents: "none",
                }}
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: [0, 0.7, 0], x: [-3, 3, -2] }}
                transition={{ duration: 0.2 }}
              >
                your age now
              </motion.div>
            )}

            {/* Glitch layer 2 - cyan */}
            {glitchEffect && (
              <motion.div
                className="absolute inset-0 text-cyan-500 font-mono tracking-[0.5em] text-lg md:text-xl uppercase font-bold"
                style={{
                  mixBlendMode: "screen",
                  pointerEvents: "none",
                }}
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: [0, 0.7, 0], x: [3, -3, 2] }}
                transition={{ duration: 0.2, delay: 0.05 }}
              >
                your age now
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-20 hidden md:block"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="w-32 h-32 border-4 border-fuchsia-500/30 rounded-full"
            style={{
              boxShadow:
                "inset 0 0 20px rgba(236, 72, 153, 0.4), 0 0 20px rgba(236, 72, 153, 0.4)",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 hidden md:block"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="w-24 h-24 border-4 border-cyan-500/30 rounded-full"
            style={{
              boxShadow:
                "inset 0 0 20px rgba(34, 211, 238, 0.4), 0 0 20px rgba(34, 211, 238, 0.4)",
            }}
          />
        </motion.div>
      </div>

      {/* Cyberpunk UI Overlay */}
      <CyberpunkUI />

      {/* Age Input Modal */}
      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowInput(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-fuchsia-950/90 to-cyan-950/90 p-8 rounded-2xl border-2 border-fuchsia-500/50 backdrop-blur-md"
              style={{
                boxShadow:
                  "0 0 50px rgba(236, 72, 153, 0.5), inset 0 0 50px rgba(6, 182, 212, 0.2)",
              }}
            >
              <h2 className="text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                Enter Age
              </h2>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-4 py-3 bg-black/50 border-2 border-fuchsia-500/50 rounded-lg text-white text-2xl text-center focus:outline-none focus:border-fuchsia-400 transition-colors"
                style={{
                  boxShadow: "inset 0 0 20px rgba(236, 72, 153, 0.2)",
                }}
                autoFocus
                maxLength={3}
              />
              <button
                onClick={() => setShowInput(false)}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-lg text-white hover:from-fuchsia-500 hover:to-cyan-500 transition-all duration-300"
                style={{
                  boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
                }}
              >
                Confirm
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none z-50 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)",
        }}
      />
    </div>
  );
}
