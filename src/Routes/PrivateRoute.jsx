/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, isLoading} = useContext(AuthContext);

    if(isLoading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

   if(!isLoading && !user){
    return <Navigate to={"/login"}></Navigate>
   }

    return children;
};

export default PrivateRoute;