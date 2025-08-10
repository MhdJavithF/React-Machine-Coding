import React, { useEffect, useRef, useState } from 'react'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropRef = useRef(null);

    const toggling = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (e) => {
            if (dropRef.current && !dropRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className='animated-bg'>

            <h1>Dropdown with Outside <br></br> click close</h1>
            <div ref={dropRef}>
                <button style={{ display: 'block', width: '500px' }} onClick={toggling}>Select Options</button>
                {isOpen &&
                    <div>
                        {["Option 1", "Option 2", "Option 3"].map((opt, indx) => (
                            <button key={indx} style={{ display: 'block', width: '500px' }}>{opt}</button>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Dropdown