const ServiceForm = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
        {/* Service Type Dropdown */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Service Type
          </label>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Front End</option>
            <option>Back End</option>
            <option>Full Stack</option>
          </select>
          <p className="text-xs text-gray-500">
            Caption text, description, notification
          </p>
        </div>

        {/* Quantity Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            placeholder="10"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Unit Price Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Unit Price
          </label>
          <input
            type="text"
            placeholder="$21.99"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Total Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total
          </label>
          <input
            type="text"
            placeholder="$219.90"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
        </div>

        {/* Remove Button */}
        <div className="sm:col-span-5 flex justify-end">
          <button className="mt-4 text-red-600 hover:text-red-800 text-sm font-medium flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
