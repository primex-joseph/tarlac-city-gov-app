import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function AboutOverview() {
  const headingText = "About Tarlac City Government";

  const words = headingText.split(" ");

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-6 text-[#0A1A2F] ${cinzel.className}`}>
          {words.map((word, i) => (
            <span key={i} className="gov-word mr-2">
              {word}
            </span>
          ))}
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mt-6">
          The City Government of Tarlac is dedicated to providing efficient,
          transparent, and citizen-centered public service...
        </p>
      </div>
    </section>
  );
}
