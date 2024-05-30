import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ image }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loading-screen ${visible ? '' : 'slide-up'}`}>
            <img src={image} alt="Loading" />
        </div>
    );
};

export default LoadingScreen;
