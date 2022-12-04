import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DetailPageContext } from '../pages/DetailPage';

ProductDescription.propTypes = {

};

function ProductDescription({ props }) {

    const product = useContext(DetailPageContext);
    return (
        <div dangerouslySetInnerHTML={{ __html: product.description }} />


    );
}

export default ProductDescription;