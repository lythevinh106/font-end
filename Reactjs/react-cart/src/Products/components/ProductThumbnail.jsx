import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

ProductThumbnail.propTypes = {

};

function ProductThumbnail({ product }) {

    // console.log(product);
    return (
        <Box>
            <img
                src={`https://api.ezfrontend.com${product.thumbnail?.url}`}
            />
        </Box>
    );
}

export default ProductThumbnail;