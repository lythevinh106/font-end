import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';


CounterFeature.propTypes = {

};

function CounterFeature(props) {

    const dispatch = useDispatch();
    ////useSelector la cai hook lay dc 1 state tu trong kho
    const count = useSelector(state => state.count)
    const handleIncreaseClick = () => {
        const action = increase();
        dispatch(action)

    }
    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action)

    }

    return (
        <div>
            Counter  Feature{count}
            {console.log(count)}

            <button onClick={handleIncreaseClick}>increase</button>
            <button onClick={handleDecreaseClick}>deccrase</button>
        </div>
    );
}

export default CounterFeature;