import React, { useRef } from "react";

const UseRef = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" placeholder="Email" ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}

export default UseRef;