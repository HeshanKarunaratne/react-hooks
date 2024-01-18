import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(true);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            handleToggle();
        }
    }));

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div>
            <button onClick={handleToggle}
            >
                Button From Child
            </button>
            {toggle && <span>Toggle</span>}
        </div>
    )
});

export default Button;