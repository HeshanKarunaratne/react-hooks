import React, { useRef } from "react";
import Button from "../items/Button";

const UseImperativeHandle = () => {
    const buttonRef = useRef<any>(null);
    return (
        <div>
            <button onClick={() => {
                if (buttonRef !== null && buttonRef.current !== null) {
                    buttonRef.current?.alterToggle();
                }
            }}>Button From Parent</button>
            <Button ref={buttonRef} />
        </div>
    )
}

export default UseImperativeHandle;