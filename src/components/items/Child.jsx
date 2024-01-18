import React, { useEffect } from "react";

const Child = ({ returnComment }) => {

    useEffect(() => {
        console.log("Function called")
    }, [returnComment]);

    return (
        <div>
            {returnComment("heshan")}
        </div>
    )
};

export default Child;