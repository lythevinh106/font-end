import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from "./Header.module.scss"
import classNames from "classnames/bind"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark, } from '@fortawesome/free-regular-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optiona
import { Wrapper as PopperWrapper, Wrapper } from '../Popper';
import AccountItem from '../AccountItem';
import Button from '../Button';
import Menu from '../Popper/Menu';
import { faMessage, faUpload } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routes from '../../../../config/routes';


Header.propTypes = {

}

const MENU_ITEMS = [
    {
        type: "language",
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English"
                },
                {
                    type: "language",
                    code: "vi",
                    title: "tieng viet",
                    children: {
                        title: "Language",
                        data: [
                            {
                                code: "en",
                                title: "tieng viet 1"
                            },
                            {
                                code: "en",
                                title: "tieng viet 2"
                            },


                        ]
                    }
                },
                {
                    code: "cn",
                    title: "trung quoc"
                }
            ]
        }

    },
    {
        title: "feedback and help",
        to: "/feedback"

    },
    {
        title: "keyboard sortcut",


    }
]

const cx = classNames.bind(styles);
const currentUser = true;

const handleMenuChange = ((Menuitem) => {

    // switch (Menuitem.type) {
    //     case "language":
    //         break;
    //     default:
    //         break;
    // }
})

function Header(props) {





    const userMenu = [

        {
            title: "view profile",
            to: "/profile"

        },
        {
            title: "logout",
            to: "/logout"

        },
        ...MENU_ITEMS
    ]



    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <Link to={routes.home}>
                        <img height={42} width={108} src="https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png" alt="" />
                    </Link>
                </div>
                {/* /search */}

                <Search />





                <div className={cx("actions")}>

                    {currentUser ? (
                        <>

                            <Tippy trigger='click' content="upload video" placement='bottom'>
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faUpload} />
                                </button>
                            </Tippy>


                            {/* <button className={cx("action-btn")}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button> */}
                        </>
                    ) : (

                        <>

                            <Button to="login" primary small className={cx("custom-login")}>Login</Button>
                            {/* <Button to="login" disabled outline >Login</Button>
                    <Button primary small >Login</Button> */}







                        </>
                    )


                    }



                    <Menu
                        onChange={handleMenuChange}
                        items={currentUser ? userMenu : MENU_ITEMS}
                    >
                        {currentUser ? (

                            <Image className={cx("user-avatar")}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fbbb4325ea38b04c639c3aa392208fe6~c5_100x100.jpeg?x-expires=1668916800&x-signature=Kv72C3DZb6mH0sjrJDSrpanB9cA%3D"

                            />



                        ) : (
                            <button className={cx("more-btn")}>
                                menu
                            </button>
                        )
                        }


                    </Menu>


                </div>






            </div >
        </header >
    );
}

export default Header;