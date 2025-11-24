import { motion, AnimatePresence } from "motion/react";
import { X, Crown } from "lucide-react";

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MessageModal({ isOpen, onClose }: MessageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-black/90 border border-fuchsia-500/50 rounded-2xl p-8 overflow-hidden"
            style={{
              boxShadow: "0 0 50px rgba(236, 72, 153, 0.2)",
            }}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="p-4 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30"
              >
                <Crown className="w-12 h-12 text-fuchsia-400" />
              </motion.div>

              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 font-mono">
                  A Toast to Excellence:
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-white font-mono">
                  The 19th Chapter
                </h3>
              </div>

              <div className="relative">
                {/* Quote marks decorative */}
                <span className="absolute -top-4 -left-4 text-6xl text-fuchsia-500/20 font-serif">
                  "
                </span>
                <span className="absolute -bottom-8 -right-4 text-6xl text-cyan-500/20 font-serif">
                  "
                </span>

                <p className="text-gray-300 text-lg leading-relaxed font-light max-w-lg mx-auto">
                  Another year has passed, not just adding a number, but adding
                  value, wisdom, and grace. This page is a tribute to the
                  journey you've walked and the legacy you are building. May
                  this new age bring you a throne of success and a crown of
                  happiness. Keep shining comfortably at the top.
                </p>
                <p className="text-cyan-400 text-left mt-4 font-mono text-sm tracking-wider max-w-lg mx-auto">
                  from: Haerul
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-full text-white font-bold tracking-wider hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-shadow"
              >
                ACKNOWLEDGE
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
