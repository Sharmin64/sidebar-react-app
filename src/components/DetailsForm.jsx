const DetailsForm = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-lg font-semibold text-gray-700">Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Title Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            placeholder="Vestibulum purus quam scelerisque..."
            className="mt-1 block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500">
            Caption text, description, notification
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            placeholder="Description"
            className="mt-1 block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500">
            Caption text, description, notification
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsForm;
