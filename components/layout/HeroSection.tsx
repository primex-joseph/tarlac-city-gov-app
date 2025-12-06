"use client";

export default function HeroSection() {
  return (    
    
      <section className="bg-[url('/hero-placeholder.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-2 py-2 flex flex-col md:flex-row items-center gap-0">
          <div className="w-full md:w-2/3 bg-white/80 backdrop-blur p-6 rounded-lg shadow">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">Welcome to Tarlac City</h2>
            <p className="mt-3 text-gray-700">This is a sample text only here we can add some information about tarlac city.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="px-4 py-2 rounded-md bg-green-600 text-white shadow hover:bg-green-700" href="#services">View Services</a>
              <a className="px-4 py-2 rounded-md border border-green-600 text-green-700 hover:bg-green-50" href="#news">Latest News</a>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-white p-4 rounded-lg shadow">
              <label className="text-sm font-medium text-gray-700">Search Services</label>
              <div className="mt-3 flex gap-2">
                <input className="flex-1 rounded-md border border-gray-200 px-3 py-2" placeholder="Search permits, forms, announcements..." />
                <button className="px-4 py-2 rounded-md bg-green-600 text-white">Search</button>
              </div>
            </div>

            <div className="mt-4 bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-semibold text-gray-700">Quick Links</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <li className="p-2 rounded-md bg-green-50">Apply for Permit</li>
                <li className="p-2 rounded-md bg-green-50">Property Tax</li>
                <li className="p-2 rounded-md bg-green-50">Business Registration</li>
                <li className="p-2 rounded-md bg-green-50">COVID-19 Updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}