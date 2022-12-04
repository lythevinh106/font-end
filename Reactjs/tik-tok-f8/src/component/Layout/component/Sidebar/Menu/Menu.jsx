import React from 'react';
import PropTypes from 'prop-types';

Menu.propTypes = {

};

function Menu({ children }) {
    return (
        <nav>
            {children}
        </nav>
    );
}

export default Menu;