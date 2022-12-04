import React from 'react';
import PropTypes from 'prop-types';
import styles from './SuggestAccounts.module.scss'
import classNames from "classnames/bind";
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
SuggestAccounts.propTypes = {

};

function SuggestAccounts({ label }) {
    return (
        <div className={cx("wrapper")}>
            <p className={cx("label")}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />


            <p className={cx("more-btn")}>Seeall</p>
        </div>
    );
}

export default SuggestAccounts;