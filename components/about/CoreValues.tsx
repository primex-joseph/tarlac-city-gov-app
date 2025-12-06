export default function CoreValues() {
  const values = [
    "Integrity",
    "Transparency",
    "Accountability",
    "Service Excellence",
    "Professionalism",
    "Inclusivity",
    "Commitment to Community"
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-6">Core Values</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-lg text-gray-700">
          {values.map((v, i) => (
            <li key={i} className="bg-green-100 py-4 rounded-lg font-medium">
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

