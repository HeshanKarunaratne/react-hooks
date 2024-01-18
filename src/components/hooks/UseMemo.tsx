import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

const UseMemo = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setData(res.data);
            });
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("Computed");
        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <div>
            {getLongestName}
            <button onClick={() => { setToggle(!toggle) }}>Toggle</button>
            {toggle && <h1>toggle</h1>}
        </div>
    )
}

export default UseMemo;