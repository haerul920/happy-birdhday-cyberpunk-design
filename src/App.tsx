import { useState, useEffect } from "react";
import { CyberpunkBirthday } from "./components/CyberpunkBirthday";
import { MobileNotSupported } from "./components/MobileNotSupported";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <MobileNotSupported />;
  }

  return <CyberpunkBirthday />;
}
