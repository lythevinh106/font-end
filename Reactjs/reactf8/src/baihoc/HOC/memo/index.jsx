import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';

HocMemo.propTypes = {

};

function HocMemo(props) {
    const [count, setCount] = useState(0)

    const increase = () => {

        setCount(count + 1);
    }
    return (
        <div style={{ padding: "10px 32px" }}>
            {/* day la component con nhung van bi re-render theo cha cua no
            nen chua toi uu hieu nang */}
            <Content />
            <h1>{count}</h1>
            <button onClick={increase}>Click Me</button>
        </div>
    );
}
/////su dung memo? o ben côpnent con nên sẽ k  bị render cái côpnent con
export default HocMemo;