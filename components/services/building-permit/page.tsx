export default function BuildingPermitPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Building Permit</h1>
          <p className="text-lg mt-2">
            Submit plans, schedule inspections, and track construction approvals.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Architectural Plans</li>
          <li>Structural Plans</li>
          <li>Site Development Plan</li>
          <li>Bill of Materials</li>
          <li>Ownership Documents</li>
        </ul>
      </section>
    </main>
  );
}
