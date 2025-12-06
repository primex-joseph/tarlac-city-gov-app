"use client";

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold text-green-800">Services</h3>
      <p className="mt-2 text-gray-600">
        Popular services offered to residents and businesses.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Building Permit', desc: 'Apply and track your building permits easily online.' },
          { title: 'Business Permit', desc: 'Manage and renew your business permits efficiently.' },
          { title: 'Cedula', desc: 'Request and obtain your community tax certificate (cedula).' },
        ].map((service) => (
          <div key={service.title} className="rounded-lg overflow-hidden bg-white shadow">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              {service.title} Icon
            </div>
            <div className="p-4">
              <h4 className="font-semibold">{service.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
              <div className="mt-3">
                <a className="text-green-700 font-medium" href="#">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
