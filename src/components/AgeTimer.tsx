import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface TimeElapsed {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function AgeTimer() {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Start date: November 24, 2006 (19 years ago from 2025)
    // User mentioned "counting up is from November 24, 2026, so it's been 19 years now"
    // Assuming 2006 is the correct birth year for a 19th birthday in 2025.
    const startDate = new Date("2006-11-24T00:00:00");

    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      // Calculate years
      let years = now.getFullYear() - startDate.getFullYear();
      const m = now.getMonth() - startDate.getMonth();
      if (m < 0 || (m === 0 && now.getDate() < startDate.getDate())) {
        years--;
      }

      // Calculate remaining time for days, hours, minutes, seconds
      // Create a date object for the last birthday
      const lastBirthday = new Date(startDate);
      lastBirthday.setFullYear(startDate.getFullYear() + years);

      const diffSinceLastBirthday = now.getTime() - lastBirthday.getTime();

      const days = Math.floor(diffSinceLastBirthday / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diffSinceLastBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (diffSinceLastBirthday % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((diffSinceLastBirthday % (1000 * 60)) / 1000);

      setTimeElapsed({ years, days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "YEARS", value: timeElapsed.years },
    { label: "DAYS", value: timeElapsed.days },
    { label: "HOURS", value: timeElapsed.hours },
    { label: "MINUTES", value: timeElapsed.minutes },
    { label: "SECONDS", value: timeElapsed.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 z-20">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl relative overflow-hidden group"
          style={{
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          }}
        >
          {/* Cyberpunk glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Border gradient */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-300" />

          <span
            className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2 z-10 font-mono tracking-tighter"
            style={{
              textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            {unit.value.toString().padStart(2, "0")}
          </span>
          <span className="text-[10px] md:text-xs font-bold text-cyan-300 tracking-widest uppercase z-10">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
