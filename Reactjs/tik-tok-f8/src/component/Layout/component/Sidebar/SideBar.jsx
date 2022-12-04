import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Sidebar.module.scss"
import classNames from "classnames/bind"
import Menu from "./Menu/Menu"
import MenuItem from "./Menu/MenuItem"
import routes from '../../../../config/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCake, faHome } from '@fortawesome/free-solid-svg-icons';
import { faUber } from '@fortawesome/free-brands-svg-icons';
import SuggestAccounts from '../SuggestAccounts/SuggestAccounts';




const cx = classNames.bind(styles);

Sidebar.propTypes = {

};

function Sidebar(props) {
    return (
        <aside className={cx("wrapper")}>
            <Menu>

                <MenuItem title="for your" to={routes.home} icon={<FontAwesomeIcon icon={faHome} />}></MenuItem>
                <MenuItem title="flowwing" to={routes.following} icon={<FontAwesomeIcon icon={faUber} />} ></MenuItem>
                <MenuItem title="live" to={routes.live} icon={<FontAwesomeIcon icon={faCake} />}></MenuItem>
            </Menu>

            <SuggestAccounts label="suggest account" />
        </aside>
    );
}

export default Sidebar;