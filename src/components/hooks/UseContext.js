import React, { useState, createContext } from "react";
import Login from "../items/Login";
import User from "../items/User";

export const AppContext = createContext(null);

const UseContext = () => {
    const [username, setUsername] = useState("");
    return (
        <AppContext.Provider value={{ username, setUsername }} >
            <Login />
            <User />
        </AppContext.Provider >
    )
}

export default UseContext;