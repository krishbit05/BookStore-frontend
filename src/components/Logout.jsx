import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Logout(){
    const [authUser,setAuthUser] = useAuth();
    const navigate = useNavigate();
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            localStorage.removeItem("userEmail");
            toast.success("Logout Success");
            navigate('/');
            setTimeout(()=>{
                window.location.reload();
            },1000)
        }catch(err){
            toast.error("Error: "+err.message);
        }
    }
    return(
        <div>
           <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
           onClick={handleLogout}>
            Logout
           </button>
        </div>
    );
}

