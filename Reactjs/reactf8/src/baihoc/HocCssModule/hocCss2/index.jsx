import React from 'react';
import PropTypes from 'prop-types';
import styles from "./HocCss2.module.css"
import GlobalStyle from '../globalStyle';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

HocCss2.propTypes = {

};

function HocCss2(props) {
    console.log(styles)
    return (
        <GlobalStyle>
            <div className={cx("title", {
                active: true,

            })}>
                Hoc css2
            </div>
        </GlobalStyle >
    );
}

export default HocCss2;