import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Full Stack Web Developer.", "UI Designer.", "Content Writer."];

const TypingEffect = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 50;
    const currentText = words[wordIndex];

    if (!isDeleting && currentWord === currentText) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && currentWord === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setCurrentWord((prev) =>
        isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, wordIndex]);

  useEffect(() => {
    const interval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-dark_yellow flex items-center">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {currentWord}
      </motion.span>
      <motion.span
        className="text-dark_yellow"
        animate={{ opacity: blink ? 1 : 0 }}
      >
        |
      </motion.span>
    </div>
  );
};

export default TypingEffect;
