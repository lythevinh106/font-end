import React from 'react';
import PropTypes from 'prop-types';
import styles from "./HocCss1.module.css"

HocCss1.propTypes = {

};



function HocCss1(props) {
    /* vi bị trùng style trong css nên thẻ h1 bị trùng
    vì thế nên sử dụng css module or  thu vien styled component

     k kế thừa đc,co the giai quyyét bang cach them côpnent cha ôm nó
     ////viet bên css k nen xai *,h1,p....

    */

    return (
        <div>
            <h1 className={styles.title} >Hoc css1</h1>
        </div>
    );
}

export default HocCss1;