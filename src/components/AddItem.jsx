import { FaPlus } from "react-icons/fa6";

const AddItem = () => {
  return (
    <>
      <div className="flex flex-auto">
        <div className="w-1/2">
          <button className=" btn btn-outline text-lime-700 font-bold">
            <FaPlus className="inline-block text-lime-700" />
            Add Item
          </button>
        </div>
        <div className=" w-1/2 flex flex-1 justify-end gap-1">
          <div>
            <input
              type="text"
              placeholder="Discount"
              className="mt-1 block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500">
              Caption text, description, notification
            </p>
          </div>

          <div>
            <input
              type="text"
              placeholder="Taxes"
              className="mt-1 block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500">
              Caption text, description, notification
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;
