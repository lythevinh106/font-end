import React, { Children } from "react";
import PropTypes from "prop-types";

import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optiona
import Wrapper from "../Wrapper";

import MenuItems from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";



const cx = classNames.bind(styles);

function HeaderMenu({ title, onBack }) {


  return (
    <header className={cx("header")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx("header-title")}>{title}</h4>
    </header>

  )
}

export default HeaderMenu;
