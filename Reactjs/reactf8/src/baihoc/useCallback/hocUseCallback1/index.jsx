import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Content from '../Content';

HocUseCallBack1.propTypes = {

};

function HocUseCallBack1(props) {
    const [count, setCount] = useState(0)
    ////bi loi
    // const handelIncrease = () => {

    //     setCount(count + 1);
    // }


    ///su dung use callback

    ////syntax giống như effect 


    /*
    nó sẽ tao ra 1 cái tham chiếu lưu lại giá trị của lần mouted(là lần đầu tiên render)
    để khi so sanh === vs côpnent con có cái memo thì nó === nhau
    --có thể truyền vào deps như effect: khi cái j đó thay đổi thì gán lại tham chiếu
    */

    const handelIncrease = useCallback(() => {

        setCount(prvCount => prvCount + 1);
    }, []);///

    return (
        <div style={{ padding: "10px 32px" }}>
            {/* vì khi re-render lai thì handelIncrease sẽ là 1 cái hàm khác(tham chiếu mới)
            nên truyền sang coponent con có memo nó sẽ so sánh === và nó sẽ không bằng
            nên props của côpnent con thay doi nên vẫn bị re-render : nên sử dung useCallback */}
            {/* ////vi day la ham nen khi truyen no la tham chieu */}
            <Content onIncrease={handelIncrease} />
            <h1>{count}</h1>

        </div>
    );
}

export default HocUseCallBack1;