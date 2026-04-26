import { useState, useEffect } from "react";

export function TypingEffect({ phrases, typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000 }) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(phrase.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(phrase.substring(0, currentText.length + 1));
        if (currentText.length === phrase.length) {
          timer = setTimeout(() => setIsDeleting(true), delayBetween);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      <span className="ml-1 inline-block h-6 w-0.5 bg-primary animate-pulse" style={{ animationDuration: '0.8s' }} />
    </span>
  );
}
