import React from 'react';

const Footer = () => {
    return (
        <div className='text-center m-5'>
            <p><small>copyright @ {new Date().getUTCFullYear()} </small></p>
        </div>
    );
};

export default Footer; 