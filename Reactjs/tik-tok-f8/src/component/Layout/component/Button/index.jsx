import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
Button.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    onClick: PropTypes.func,
    passProps: PropTypes.string,


};

function Button({
    className, to, href, children, disabled = false, primary = false, outline = false, small = false, large = false, onClick, passProps }) {

    let Comp = "button";
    const props = {
        onClick,
        ...passProps

    }
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        })
    }
    if (to) {
        props.to = to
        Comp = Link

    } else if (href) {
        props.href = href
        Comp = "a"
    }


    const classes = cx("wrapper", {
        primary,
        outline,
        small,
        large,
        disabled,
        [className]: className
    })
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;