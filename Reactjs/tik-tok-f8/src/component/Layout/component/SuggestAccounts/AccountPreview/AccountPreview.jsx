import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames/bind";


import Tippy from '@tippyjs/react';

import styles from './AccountPreview.module.scss'
import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

AccountPreview.propTypes = {

};

function AccountPreview(props) {
    return (
        <div className={cx("header")}>
            <header>
                <img className={cx("avatar")} src="" alt="" />
                <Button primary>Fllow</Button>
            </header>
            <div className={cx("body")}>

                <p className={cx("nickname")}>
                    <strong>Quoc nguyen </strong>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <p className={cx("name")}>Quoc nguyen phu</p>
                <p className={cx("analytics")}>
                    <strong className={cx("value")}>8.2M</strong>
                    <strong className={cx("label")}>Follower</strong>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;