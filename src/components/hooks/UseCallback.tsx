import React, { useCallback, useState } from "react";
import Child from "../items/Child";


const UseCallback = () => {
    const [data, setData] = useState("Please sub the channel");
    const [toggle, setToggle] = useState(false);

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);

    return (
        <div>
            <Child returnComment={returnComment} />
            <button onClick={() => { setToggle(!toggle) }}>Toggle</button>
            {toggle && <h1>toggle</h1>}
        </div>
    )
}

export default UseCallback;