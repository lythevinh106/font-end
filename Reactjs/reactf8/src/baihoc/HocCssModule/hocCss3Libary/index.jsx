import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx"
import Button from './button';

HocCss3Libary.propTypes = {

};

/* su dung clsx */
/**
 * , su dung thu vien clsx or classname
 * c
 * xu li dc class dong
 * 
 */

function HocCss3Libary(props) {
    return (
        <div className="App">
            {/* primary o day la true */}
            <Button primary />
            <Button secondary />
            <Button success />
        </div>
    );
}

export default HocCss3Libary;