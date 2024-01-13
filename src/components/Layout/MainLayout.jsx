import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";


const MainLayout = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="max-w-[1250px] mx-auto min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default MainLayout;