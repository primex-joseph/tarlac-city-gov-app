"use client";

export default function Careers() {
  return (
    <section id="careers" className="bg-white/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-green-800">Career Opportunities</h3>
        <p className="text-gray-700 mt-2">
          Explore available job openings and become part of our growing team.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <article key={i} className="rounded-lg overflow-hidden shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                Job Image {i}
              </div>
              <div className="p-4">
                <h4 className="font-semibold">Job Position {i}</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Short description about the job role, qualifications, and hiring details.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-green-700 font-medium">
                    View details →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
