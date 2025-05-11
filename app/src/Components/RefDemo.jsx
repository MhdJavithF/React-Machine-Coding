import React, { useEffect, useRef, useState } from 'react';

const RefDemo = () => {
    const dropRef = useRef(null);
    const [show, setShow] = useState(false);

    console.log('Outside render -> dropRef.current:', dropRef.current);

    useEffect(() => {
        console.log('Inside useEffect AFTER render -> dropRef.current:', dropRef.current);

        return () => {
            console.log('Cleanup -> dropRef.current (before unmount):', dropRef.current);
        };
    }, []);

    return (
        <div>
            <h1>Ref Demo</h1>
            <button onClick={() => setShow(prev => !prev)}>
                Toggle Dropdown
            </button>

            {show && (
                <div ref={dropRef} style={{ padding: "10px", marginTop: "10px" }}>
                    I am the dropdown!
                </div>
            )}
        </div>
    );
};

export default RefDemo;
