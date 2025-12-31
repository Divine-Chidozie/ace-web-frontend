import "bootstrap/dist/css/bootstrap.min.css";
import "./Diamond.css";

import { motion } from "framer-motion";

const Diamonds = () => {
  const diamonds = Array(9).fill(0); // 3x3 grid

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 50px)",
        gridTemplateRows: "repeat(3, 50px)",
        gap: "10px",
      }}
    >
      {diamonds.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -200, rotate: 0, opacity: 0 }}
          animate={{ y: 0, rotate: 360, opacity: 1 }}
          transition={{
            duration: 1,
            delay: i * 0.1, // stagger one by one
            type: "spring",
            stiffness: 60,
            damping: 12,
          }}
          style={{
            width: "50px",
            height: "50px",
            background: "#0c0064", // diamond color
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // diamond shape
          }}
        />
      ))}
    </div>
  );
};

export default Diamonds;
