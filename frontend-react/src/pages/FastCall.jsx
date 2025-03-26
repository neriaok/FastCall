import React from 'react';

export function FastCall() {
    const handleCall = (number) => {
        window.location.href = `tel:+972${number}`;
    };

    return (
        <section>
            <h1>FastCall</h1>
            <button onClick={() => handleCall('0529541254')}>Call 1</button> 
            <button onClick={() => handleCall('0524185516')}>Call 2</button> 
            <button onClick={() => handleCall('0506797941')}>Call 3</button> 
        </section>
    );
}
