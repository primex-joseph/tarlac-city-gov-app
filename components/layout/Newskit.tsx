export default function NewsKit() {
  return (
    <aside className="bg-green-50 border border-green-200 p-6 rounded-lg h-fit shadow-md">

      {/* Connect with Us Section */}
      <h3 className="text-green-800 font-semibold text-lg mb-5">
        Connect with Us
      </h3>
      <ul className="space-y-4 text-sm">
        <li>
          <a
            href="#"
            className="text-green-700 hover:text-green-900 flex items-center gap-3"
          >
            <span className="w-4 h-4 bg-green-400 block rounded-sm"></span>
            Like us on Facebook
          </a>
        </li>

        <li>
          <a
            href="#"
            className="text-green-700 hover:text-green-900 flex items-center gap-3"
          >
            <span className="w-4 h-4 bg-pink-400 block rounded-sm"></span>
            Follow us on Twitter
          </a>
        </li>

        <li>
          <a
            href="#"
            className="text-green-700 hover:text-green-900 flex items-center gap-3"
          >
            <span className="w-4 h-4 bg-blue-400 block rounded-sm"></span>
            Contact via Email
          </a>
        </li>
      </ul>

      <hr className="my-6 border-green-300" />

      {/* News Articles Section */}
      <h4 className="text-green-800 font-semibold text-lg mb-4">
        News Articles
      </h4>

      <div className="space-y-5 text-sm">
        {/* News Article 1 */}
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 bg-green-200 rounded">
            <img
              src="https://via.placeholder.com/50"
              alt="Tarlac Watershed"
              className="object-cover w-full h-full rounded"
            />
          </div>
          <p className="text-green-700">
            Tarlac Watershed – A Model for Inter-Stakeholder Protection
          </p>
        </div>

        {/* News Article 2 */}
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 bg-green-200 rounded">
            <img
              src="https://via.placeholder.com/50"
              alt="Tarlac Centenarians"
              className="object-cover w-full h-full rounded"
            />
          </div>
          <p className="text-green-700">
            Tarlac Recognizes Centenarians with Incentives
          </p>
        </div>

        {/* News Article 3 */}
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 bg-green-200 rounded">
            <img
              src="https://via.placeholder.com/50"
              alt="Environmental Event"
              className="object-cover w-full h-full rounded"
            />
          </div>
          <p className="text-green-700">
            Tarlac Hosts Environmental Awareness Event
          </p>
        </div>

        {/* News Article 4 */}
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 bg-green-200 rounded">
            <img
              src="https://via.placeholder.com/50"
              alt="Tarlac Medical Center"
              className="object-cover w-full h-full rounded"
            />
          </div>
          <p className="text-green-700">
            Tarlac Medical Center Expands Facilities
          </p>
        </div>
      </div>
    </aside>
  );
}
