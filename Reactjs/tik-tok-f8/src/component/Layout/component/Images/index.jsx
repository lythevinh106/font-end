import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

// Image.propTypes = {

// };

const Image = forwardRef(({ src, alt, ...props }, ref) => {

    const [isImageErr, setIsImageErr] = useState("");
    const headleError = () => {
        // console.log("asdd");
        setIsImageErr(noImage);

    }





    ////nen su dung forward ref de nho dc cai link cua no, k thi nos se bi lli
    const noImage = "https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/";
    return (

        <img {...props} src={isImageErr || src} ref={ref} onError={headleError} />


    );
});

export default Image;