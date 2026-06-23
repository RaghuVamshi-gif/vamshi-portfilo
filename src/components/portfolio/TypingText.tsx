import { useEffect, useState } from "react";

const PHRASES = [
  "Building Digital Experiences",
  "Designing Future Interfaces",
  "Creating Intelligent Solutions",
  "Solving Real-World Problems",
];

export function TypingText() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[i];
    const speed = deleting ? 35 : 75;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((p) => (p + 1) % PHRASES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="font-mono text-base sm:text-lg md:text-xl">
      <span className="text-accent-gradient">{text}</span>
      <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-[3px] bg-[#00D9FF] animate-blink" />
    </span>
  );
}
