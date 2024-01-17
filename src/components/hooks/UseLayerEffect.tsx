import React, { useEffect, useLayoutEffect } from "react";

const UseLayerEffect = () => {

    useEffect(() => {
        console.log("useEffect")
    }, []);

    useLayoutEffect(() => {
        console.log("useLayoutEffect")
    }, []);

    return (
        <div>

        </div>
    )
}

export default UseLayerEffect;