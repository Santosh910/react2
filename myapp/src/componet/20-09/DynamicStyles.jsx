import React, { useState } from "react";
import './DynamicStyles .css'

const DynamicStyles = () => {
    const [isButtonActive,setIsButtonActive] = useState(true);
    const handleButtonClick = () =>{
        setIsButtonActive(!isButtonActive)
    }

    const buttonClassName = isButtonActive ?'Active-Button' : "Inactive-Button";
    return(
        <div>
            <button className={buttonClassName} onClick={handleButtonClick }>
                {isButtonActive ? "Active":"Inactive"}
            </button>
        </div>
    )
}

export default DynamicStyles