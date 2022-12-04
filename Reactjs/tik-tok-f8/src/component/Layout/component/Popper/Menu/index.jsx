import React, { Children, useState } from "react";
import PropTypes from "prop-types";

import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optiona
import Wrapper from "../Wrapper";

import MenuItems from "./MenuItems";
import HeaderMenu from "./HeaderMenu";



const cx = classNames.bind(styles);
const defaultFn = () => {

}


function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {



  const [history, setHistory] = useState(
    [
      {
        data: items
      }
    ]);

  const current = history[history.length - 1]

  // console.log(current);
  const renderItems = () => {

    return current.data.map((item, index) => {

      const isParent = !!item.children;
      console.log(isParent);

      return (
        <MenuItems key={index} data={item} onClick={() => {
          if (isParent) {

            setHistory((prv) => [
              ...prv,
              item.children
            ])
          }
          else {
            onChange(item)
          }

        }
        } />)

    });


  }

  return (
    <Tippy
      interactive
      visible

      placement="bottom-end"
      // visible
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>

          <Wrapper>
            {history.length > 1 && <HeaderMenu title={current.title} onBack={() => {
              setHistory((prv) => prv.slice(0, prv.length - 1))


            }} />}


            <div className={cx("menu-body")}> {renderItems()}</div>

          </Wrapper>
        </div>
      )}


      onHide={() => setHistory(prev => prev.slice(0, 1))}
    >

      {children}

    </Tippy>
  )
}

export default Menu;
