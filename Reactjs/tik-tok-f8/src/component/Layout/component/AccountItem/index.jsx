import React from 'react';
import PropTypes from 'prop-types';
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Image from '../Images';
import { Link } from 'react-router-dom';


AccountItem.propTypes = {
    data: PropTypes.node.isRequired,  ///tat ca nhung j co kieu danh sach ren der dc 

};

const cx = classNames.bind(styles);


function AccountItem({ data }) {
    return (

        <div>
            <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
                <Image src={data.avatar} alt="" className={cx("avatar")} />
                <div className={cx("info")}>
                    <p className={cx("name")}>

                        <span>{data.full_name}</span>
                        <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                    </p>

                </div>
            </Link>
        </div>
    );
}

export default AccountItem;