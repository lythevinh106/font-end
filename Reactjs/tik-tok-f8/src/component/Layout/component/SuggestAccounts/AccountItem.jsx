import React from 'react';
import PropTypes from 'prop-types';
import styles from './SuggestAccounts.module.scss'
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);


AccountItem.propTypes = {

};

function AccountItem(props) {



    const renderPreview = (props) => {
        return (
            <div className={cx("preview")} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>

            </div>
        );

    }


    return (
        <div>
            <Tippy
                interactive
                placement='bottom'
                delay={[800, 0]}

                render={renderPreview}






            >
                <div className={cx("account-item")}
                >

                    <img className={cx("avatar")} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1669348800&x-signature=%2FHlkQ1ksSk1K2ommqVL49%2B2pGa8%3D" />

                    <div className={cx("item-info")}>
                        <p className={cx("nickname")}>
                            <strong>Quoc nguyen </strong>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </p>
                        <p className={cx("name")}>Quoc nguyen phu</p>
                    </div>
                </div>
            </Tippy>

        </div>

    );
}

export default AccountItem;