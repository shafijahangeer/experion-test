import React from 'react';

const Img = ({ src, alt, className = '' }) => {
    return (
        <img
            className={`${className}`.trim()}
            src={src}
            alt={alt}
        />
    );
};

export default Img;
