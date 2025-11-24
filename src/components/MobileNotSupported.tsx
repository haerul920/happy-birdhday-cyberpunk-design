import { motion } from "motion/react";
import { Smartphone } from "lucide-react";

export function MobileNotSupported() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black px-6 text-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-black to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center max-w-md"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(6, 182, 212, 0.5)",
              "0 0 40px rgba(6, 182, 212, 0.2)",
              "0 0 20px rgba(6, 182, 212, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8 p-6 rounded-2xl bg-black/50 border border-cyan-500/50 backdrop-blur-sm"
        >
          <Smartphone className="w-16 h-16 text-cyan-400" />
        </motion.div>

        <h1 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
          Tampilan Tidak Didukung
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Untuk pengalaman terbaik, silakan akses situs ini melalui perangkat{" "}
          <span className="text-cyan-400 font-semibold">Tablet</span> atau{" "}
          <span className="text-fuchsia-400 font-semibold">Desktop</span>.
        </p>

        {/* Decorative line */}
        <motion.div
          className="mt-8 h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{ width: ["0%", "50%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
