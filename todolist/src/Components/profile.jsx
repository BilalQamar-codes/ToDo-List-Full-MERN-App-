import React from "react";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Profile(params) {
    const auth = useAuth();
    const navigate = useNavigate();
    
    function handleLogout() {
        auth.logout();
        navigate('/login');
    }

    return (
        <div className="User-Info">
            <div>
                <h1>Welcome  {auth.user ? auth.user.name : 'Guest'} </h1>
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Profile;
