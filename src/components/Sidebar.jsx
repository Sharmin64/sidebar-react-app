import { RiDashboard3Fill } from "react-icons/ri";
import SideBody from "./SideBody";
import SideNav from "./SideNav";
import { GiShoppingBag } from "react-icons/gi";
import { AiOutlineProduct } from "react-icons/ai";
import { GrDeliver } from "react-icons/gr";
import stockIcon from "../assets/icons/stock.png";
import customer from "../assets/icons/customer-journey.png";

const Sidebar = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          <div className="h-[3em]">
            <SideNav />
          </div>
          <SideBody />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>
                <RiDashboard3Fill className="text-2xl text-green-400" />
                Dashboard
              </a>
            </li>
            <li>
              <a>
                <GiShoppingBag className="text-2xl text-green-400" />
                Orders
              </a>
            </li>
            <li>
              <a>
                <AiOutlineProduct className="text-2xl text-green-400" />
                Products
              </a>
            </li>
            <li>
              <a>
                <GrDeliver className="text-2xl" />
                Couriurs
              </a>
            </li>
            <li>
              <a>
                <img src={stockIcon} className="w-5" />
                Stock
              </a>
            </li>
            <li>
              <a>
                <img src={customer} className="w-5" />
                Customers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
