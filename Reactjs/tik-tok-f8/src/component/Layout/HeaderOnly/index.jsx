import React, { Children } from 'react';
import PropTypes from 'prop-types';

import Header from '../component/Header';


HeaderOnly.propTypes = {

};

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className='Container'>

                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;