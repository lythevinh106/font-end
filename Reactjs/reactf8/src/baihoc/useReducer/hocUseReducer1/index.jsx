import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';

HocUseReducer
    .propTypes = {

};
/////so sanh cachs xu li cua bai toan nay
//----useState
/*
+Init State:0
+Actions:UP/DOwn




//----Use Reducer
/*
+Init State:0
+Actions:UP/DOwn
+Reducer
+Dispatch:thuật ngữ đi kich hoạt 1 action


 */

////----cac bước thực hiện



//+init state
const initState = 0;

//+actions
const UP_ACTION = "up"
const DOWN_ACTION = "down"

///+Reducer
////laafn dau tien no se k hien thi ham nay
const reducer = (state, action) => {
    console.log("reducer");
    switch (action) {

        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error("Invalid Action")

    }
}


////day la su dung useState
// function HocUseReducer
//     (props) {

//     const [count, setCount] = useState(0)
//     return (
//         <div className="App">
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count - 1)}>Down</button>
//             <button onClick={() => setCount(count + 1)}>Up</button>
//         </div >
//     );

// }


////day la su dung reducer
function HocUseReducer
    (props) {

    const [count, dispatch] = useReducer(reducer, initState)

    console.log(count);
    ////count se lay init state lam cai khoi tao
    /* hàm reducer ở lần đàu tiên chạy thì nó chưa  đc chay vì nó là hàm, khi 
    dispatch dduowjc chay thi no moi kich hoat
    --khi dispatch chajy thi no se render lai giong nhu setState
    */
    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={() => dispatch("down")}>Down</button>
            <button onClick={() => dispatch("up")}>Up</button>
        </div >
    );

}

export default HocUseReducer
    ;