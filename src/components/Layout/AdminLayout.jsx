import { Outlet } from "react-router-dom";


const AdminLayout = () => {
    return (
        <div className="flex min-h-screen">
            <div className="bg-green-400 flex-[1]">
                <h2>Sidebar</h2>
            </div>
            <div className="bg-red-400 flex-[5]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;