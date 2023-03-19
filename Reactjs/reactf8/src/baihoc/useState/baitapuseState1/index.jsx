import React, { useState } from 'react';
import PropTypes from 'prop-types';

BtState.propTypes = {

};

const gifts = [

    "CPU i9",
    "RAM 32GB RGB",
    "RGB KeyBoard"
]


function BtState(props) {
    const [gift, setGifts] = useState();


    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        console.log(index)
        setGifts(gifts[index]);
    }
    

    return (
        <div style={{ padding: 32 }}>
            <h1>{gift || "CHuwa co phan thuong"}</h1>

            <button onClick={randomGift}>lay thuong</button>
        </div>
    );
}

export default BtState;