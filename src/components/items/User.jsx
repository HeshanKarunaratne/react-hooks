import React, { useContext } from "react";
import { AppContext } from "../hooks/UseContext";

const User = () => {
    const { username } = useContext(AppContext);
    return (
        <div>
            {username && <h1>User: {username}</h1>}
        </div>
    )
};

export default User;