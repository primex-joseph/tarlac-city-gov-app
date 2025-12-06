export default function CedulaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Cedula / Community Tax</h1>
          <p className="text-lg mt-2">
            Apply for a community tax certificate quickly and conveniently.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Valid ID</li>
          <li>Proof of income (if applicable)</li>
          <li>Residency details</li>
        </ul>
      </section>
    </main>
  );
}

