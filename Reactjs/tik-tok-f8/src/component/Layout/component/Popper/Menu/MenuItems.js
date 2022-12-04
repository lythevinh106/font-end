import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

MenuItems.propTypes = {};

const cx = classNames.bind(styles);
function MenuItems({ data, onClick }) {
  //   console.log(data);
  return (
    <Button className={cx(".menu-item")} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItems;
