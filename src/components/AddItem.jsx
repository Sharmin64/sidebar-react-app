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
        <div className=" w-1/2 flex flex-1 justify-end">
          <input
            type="text"
            placeholder="Discount"
            className="mt-1 block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            type="text"
            placeholder="Taxes"
            className="mt-1 block w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default AddItem;
