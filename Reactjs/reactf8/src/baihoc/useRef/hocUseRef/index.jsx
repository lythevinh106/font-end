import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

HocUseRef1
    .propTypes = {

};


///// tuong tự như việc khai báo ở đây nhưng nó k đúng vs quy ước: let timerID

function HocUseRef1
    (props) {

    const [count, setCount] = useState(60);
    /*moi lan setCount chạy lại thì render lại nên những cái biến hay hàm
    trong cái component này sẽ là mới nên nó k giữ lại đc giá trị của lần đầu
*/
    // const ref = useRef(99)///tra ve 1 object co 1 property la current. cos the sua gia tri
    let timerID = useRef(60);


    // console.log(ref.current);
    const handleStart = () => {

        timerID.current = setInterval(() => {

            // ref.current = Math.random();
            setCount(prevCount => prevCount - 1)
        }, 1000)

    }
    const handleStop = () => {
        console.log(timerID.current);

        clearInterval(timerID.current);

    }

    return (
        <div style={{ padding: 20 }}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

        </div>
    );
}

export default HocUseRef1
    ;