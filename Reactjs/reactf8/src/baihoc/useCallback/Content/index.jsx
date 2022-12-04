import React, { memo } from 'react';
import PropTypes from 'prop-types';



Content.propTypes = {

};

function Content({ onIncrease }) {
    return (
        <>
            {console.log("day la côpnent con")}
            <h1>Day la coponent Content</h1>
            <button onClick={onIncrease}>Click Me</button>
        </>
    );
}


export default memo(Content);////nếu cái hàm increase(chứa Setstae) bên kia thay đổi thì cái côpnent nay se render lai theo 