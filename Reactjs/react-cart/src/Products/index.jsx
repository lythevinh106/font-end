import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Listpage from './pages/Listpage';

ProductFeatures.propTypes = {

};

function ProductFeatures(props) {
    return (
        <div>
            Products

            <Listpage />
        </div>
    );
}

export default ProductFeatures;