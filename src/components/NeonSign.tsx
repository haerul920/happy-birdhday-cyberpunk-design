import { motion } from 'motion/react';

interface NeonSignProps {
  text: string;
  glitch?: boolean;
}

export function NeonSign({ text, glitch }: NeonSignProps) {
  return (
    <div className="relative">
      {/* Main neon text */}
      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider relative"
        style={{
          color: '#00ffff',
          textShadow: `
            0 0 5px #00ffff,
            0 0 10px #00ffff,
            0 0 20px #00ffff,
            0 0 40px #00ffff,
            0 0 80px #ff00ff,
            0 0 100px #ff00ff
          `,
        }}
        animate={{
          opacity: glitch ? [1, 0.8, 1, 0.9, 1] : 1,
          x: glitch ? [0, -2, 2, -1, 0] : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.h1>

      {/* Glitch layer 1 - magenta */}
      {glitch && (
        <motion.h1
          className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-8xl font-black tracking-wider"
          style={{
            color: '#ff00ff',
            textShadow: '0 0 10px #ff00ff',
            mixBlendMode: 'screen',
          }}
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: [0, 0.7, 0], x: [-3, 3, -2] }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.h1>
      )}

      {/* Glitch layer 2 - cyan */}
      {glitch && (
        <motion.h1
          className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-8xl font-black tracking-wider"
          style={{
            color: '#00ffff',
            textShadow: '0 0 10px #00ffff',
            mixBlendMode: 'screen',
          }}
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: [0, 0.7, 0], x: [3, -3, 2] }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          {text}
        </motion.h1>
      )}

      {/* Flicker effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          filter: 'blur(20px)',
        }}
        animate={{
          opacity: [0, 0.3, 0],
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
