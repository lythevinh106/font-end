import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Header from '../component/Header';

import Sidebar from '../component/Sidebar/SideBar';
import styles from "./defaultLayout.module.scss"
import classNames from "classnames/bind"

DefaultLayout.propTypes = {

};


const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            < Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>
                    {children}
                </div>
            </div >
        </div >
    );
}

export default DefaultLayout;