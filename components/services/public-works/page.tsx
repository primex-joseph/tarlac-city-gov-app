export default function PublicWorksPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Public Works Requests</h1>
          <p className="text-lg mt-2">
            Report issues such as road damage, drainage problems, and broken streetlights.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Submit a Request</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Streetlight repair</li>
          <li>Pothole or road damage</li>
          <li>Drainage cleanup</li>
          <li>Sidewalk repair</li>
          <li>Other concerns</li>
        </ul>
      </section>
    </main>
  );
}

