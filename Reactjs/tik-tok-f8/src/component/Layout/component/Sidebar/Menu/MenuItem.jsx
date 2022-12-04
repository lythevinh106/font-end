import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from "./../Menu/Menu.module.scss"


const cx = classNames.bind(styles);
MenuItem.propTypes = {

};

function MenuItem({ title, to, icon }) {
    return (

        ////su dung call back de bat cai active
        <NavLink className={(nav) => cx("menu-item", { active: nav.isActive })} to={to}  >
            {icon}
            <span className={cx("title")}>{title}</span>

        </NavLink >
    );
}

export default MenuItem;