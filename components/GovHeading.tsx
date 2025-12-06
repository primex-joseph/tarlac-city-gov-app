import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function GovHeading({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <h2 className={`text-4xl md:text-5xl font-bold text-center text-[#0A1A2F] ${cinzel.className}`}>
      {words.map((word, i) => (
        <span key={i} className="gov-word mr-2">
          {word}
        </span>
      ))}
    </h2>
  );
}
