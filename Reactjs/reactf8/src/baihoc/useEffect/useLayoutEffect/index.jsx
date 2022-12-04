import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';

UseLayoutEffect
    .propTypes = {

};




/*quy trinh hoajt dong

  +useEffect:
                        +Cập nhật lại State
                        +Cập nhật lại dom
                        +Render Lại UI
                         + GỌi Cleanup nếy dép thay đổi
                         +Gọi UseEffect Call BAck

 +useLAyoutEffect:hiếm gặp
                         +Cập nhật lại State
                        +Cập nhật lại dom
                     
                         + GỌi Cleanup nếy deps thay đổi(sync)
                         +Gọi UseEffect Call BAck (sync)
                             +Render Lại UI

*/

function UseLayoutEffect(props) {





    const [count, setCount] = useState(0);
    ////nos se bij giat nhe khi ve 0
    // useEffect(() => {
    //     if (count > 3) {

    //         setCount(0);
    //     }


    // })



    ////nos se k bij giat nhe khi ve 0
    useLayoutEffect(() => {
        if (count > 3) {

            setCount(0);
        }


    })
    const handleRun = () => {
        setCount(count + 1)
    }



    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    );
}

export default UseLayoutEffect
    ;