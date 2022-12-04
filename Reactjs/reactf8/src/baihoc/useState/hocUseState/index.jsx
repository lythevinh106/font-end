import React, { useState } from 'react';
import PropTypes from 'prop-types';

HocState.propTypes = {

};

function HocState(props) {
  ////use state:

  const [counter, setCounter] = useState(1);
  //  có thể truyền vào 1 hàm vào chỗ useState(f) nếu nó return về 1 giá trí
  //  or cũng có thể truyền thằng calal back vào : vd
  const orders = [100, 200, 300];

  // const total=orders.reduce((total, cur) => total + cur);
  /// đọakn này sẽ đc thay  bang cách viết câll back ở dưới để perfomance
  //vi render xong doạn này cũng vô dụng

  const [counter2, setCounter2] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    return total;
  });

  const handleIncrease = () => {
    setCounter(counter + 1);
    console.log("giữa");
  };

  const handleIncrease2 = () => {
    setCounter((prvState) => prvState + 1); /// neu su dung callback thi nos se lay gia tri truoc +1
    setCounter((prvState) => prvState + 1); //// bay h se ++2
    console.log("giua");
  };


  ////co thee set lai state
  const [info, setinfo] = useState({ name: "Nguyen Van A", age: 18 });


  const handleUpdate = () => {

    setinfo({
      ...info,
      color: "pink"

    })
  }


  const [cars, setCars] = useState(['Bugatti', 'Roll-Royce', 'Maybach']);


  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrease2}> Increase </button>

      {console.log("cuoi")}
    </>
  );
}

export default HocState;