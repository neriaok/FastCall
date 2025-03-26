import React from 'react';

export function FastCall() {
    const handleCall = () => {
        window.location.href = 'tel:+0529541254';
    };

    return (
        <section>
            <h1>FastCall</h1>
            <button onClick={handleCall}>Call</button> 
        </section>
    );
}
