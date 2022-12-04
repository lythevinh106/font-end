import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

HocEffectWithTimer.propTypes = {

};

function HocEffectWithTimer(props) {


    const [countdown, setCountDown] = useState(180);

    useEffect(() => {

        const timeId = setInterval(() => {
            setCountDown(prv => prv - 1);
        }, 1000)


        //// ham nay lu chay truoc khi component unmouted 
        /////vif day la ban 18 nen k can
        /// cái này lun được gọi trước khi call back được gọi(trừ lần đc mouted (tức là lần đầu tiên))
        return () => {
            console.log("ham don dep");
            clearInterval(timeId)
        };

    }, [])
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    );
}

export default HocEffectWithTimer;