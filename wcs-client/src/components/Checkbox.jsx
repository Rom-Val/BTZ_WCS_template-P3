import React, { useState } from 'react'
import '../styles/Checkbox.css'
const Checkbox = () => {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="check-container">
            <div className={isClicked ? "check-bg active-bg" : "check-bg"} onClick={() => setIsClicked(!isClicked)}>
                <div className={isClicked ? "check-btn active-btn" : "check-btn"}></div>
            </div>
        </div>
    )
}

export default Checkbox