import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

HocUseRef2.propTypes = {

};

function HocUseRef2(props) {
    const [count, setCount] = useState(60);

    const timerID = useRef();
    const prvCount = useRef()

    const h1Ref = useRef();///giong nhu lay ra bang queryselector
    //  console.log(h1Ref.current);

    useEffect(() => {
        ///lay ra toa do cua h1
        const rect = h1Ref.current.getBoundingClientRect();
        console.log(rect);
    })

    useEffect(() => {
        ////effect se chay sau cai lúc render(return) nen no chua kip gan vao UI
        ///in gan lai bang gia tri truoc do
        //ham nay se chay truoc ham handleStart nen no lay dc gia tri truoc do
        console.log("count", count)
        prvCount.current = count
    }, [count])



    const handleStart = () => {

        timerID.current = setInterval(() => {

            setCount(prevCount => prevCount - 1)
        }, 1000)

    }
    const handleStop = () => {

        clearInterval(timerID.current)
    }

    console.log(count, prvCount.current);

    return (
        <div style={{ padding: 20 }}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

        </div>
    );
}

export default HocUseRef2;