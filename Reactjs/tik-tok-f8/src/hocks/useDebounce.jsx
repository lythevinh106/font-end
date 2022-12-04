import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

useDebounce.propTypes = {

};

function useDebounce(value, delay) {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {

        const handler = setTimeout(() => {
            setDebouncedValue(value)
            console.log("chay setime out")
        }, delay);


        //day la clean up dunction
        ///se dc goi kkhi deps thay doi va dc unmouted
        return () => {
            ////doan nay se chay truoc (tru lan dau tien)nen no se lien tuc xoa cai 
            ///settimeout kia di den khi nguoi dung ngung nhap
            clearTimeout(handler);
            console.log("chay ham clean")
        }

    }, [value]);


    return debouncedValue;
}

export default useDebounce;