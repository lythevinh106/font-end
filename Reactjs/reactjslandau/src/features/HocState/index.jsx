import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

HocState.propTypes = {
    
};

function HocState(props) {

    const [count,setCount]=useState(0);
    return (
        <div>
            {count}
            <button onClick={()=>{ setCount(x=>x+1)}} >Count</button>
        </div>
    );
}

export default HocState;