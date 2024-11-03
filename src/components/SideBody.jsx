import { MdEdit } from "react-icons/md";
import DetailsForm from "./DetailsForm";
import ServiceForm from "./ServiceForm";
import AddItem from "./AddItem";
import Summary from "./Summary";

const SideBody = () => {
  return (
    <>
      <h2 className="font-bold text-xl mt-4">Create a new invoice</h2>
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>E-Commerce</a>
          </li>
          <li>New Invoice</li>
        </ul>
      </div>
      <div className="mx-auto mt-2 w-[54em]">
        <div className="flex flex-grow-0 justify-between">
          <div className="mb-6 flex flex-1 justify-between border-0 h-[10em] shadow-lg ">
            <div className="pl-2">
              <h3 className="font-semibold mb-2 py-3">From:</h3>
              <h4 className="text-2xl">Brycen Jimenez</h4>
              <p>5268 Ventor Walk Apt.Wilmington/ MA</p>
              <p>55406981-699-7588</p>
            </div>
            <div>
              <button className="text-green-500 inline-flex gap-2  px-6 py-3 bg-gray-300/10">
                <MdEdit />
                Change
              </button>
            </div>
          </div>
          <div className="flex flex-1 justify-between mx-3 border-0 h-[10em] shadow-lg ">
            <div className="pl-2">
              <h3 className="font-semibold mb-2 py-3">To:</h3>
              <h4 className="text-2xl">Carla Hennig</h4>
              <p>10528 Verno Union Apt. 154</p>
              <p>Honolulu, HI, 01678</p>
            </div>
            <div>
              <button className="text-green-500 inline-flex gap-2 border-1 px-6 py-3 bg-gray-300/10">
                <MdEdit />
                Change
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 bg-gray-300/20 justify-evenly py-3">
          <div>
            <label className="block text-gray-700">Invoice Number</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="status"
            >
              Status
            </label>
            <select
              id="status"
              className="w-full px-6 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Draft</option>
              <option>Pending</option>
              <option>Paid</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Due Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>
        <div className="w-auto flex flex-1">
          <div className="w-1/2">
            <DetailsForm />
          </div>
          <div className="w-1/2">
            <ServiceForm />
          </div>
        </div>
        <div className="my-1">
          <AddItem />
        </div>
        <div className="flex float-end">
          <Summary />
        </div>
      </div>
    </>
  );
};

export default SideBody;
