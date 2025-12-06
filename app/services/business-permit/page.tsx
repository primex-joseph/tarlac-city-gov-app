"use client";

export default function BusinessPermitForm() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Business Permit Application</h1>
          <p className="text-lg mt-2">Submit your business permit request online.</p>
        </div>
      </section>

      <form className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10 space-y-6">
        <div>
          <label className="block font-semibold">Business Name</label>
          <input type="text" className="w-full p-3 border rounded" required />
        </div>

        <div>
          <label className="block font-semibold">Owner's Full Name</label>
          <input type="text" className="w-full p-3 border rounded" required />
        </div>

        <div>
          <label className="block font-semibold">Business Address</label>
          <input type="text" className="w-full p-3 border rounded" required />
        </div>

        <div>
          <label className="block font-semibold">Business Type</label>
          <select className="w-full p-3 border rounded" required>
            <option>Single Proprietorship</option>
            <option>Partnership</option>
            <option>Corporation</option>
          </select>
        </div>

        <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">
          Submit Application
        </button>
      </form>
    </main>
  );
}
