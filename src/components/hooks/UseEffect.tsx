import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
    const [data, setData] = useState("");
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setData(res.data[0].email);
                console.log("api is called")
            });
    }, []);

    return (
        <div>
            <h1>Hello {data}</h1>
            <h1>counter:{counter}</h1>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>Increase</button>
        </div>
    )
}

export default UseEffect;