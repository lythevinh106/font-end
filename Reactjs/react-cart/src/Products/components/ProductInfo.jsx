import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

ProductInfo.propTypes = {

};

function ProductInfo({ product = {} }) {

    const { name, shortDescription, salePrice, promotionPercent, originalPrice } = product;
    return (
        <div>
            <Typography>{name}</Typography>
            <Typography>{shortDescription}</Typography>
            <Box>
                <Box component="span">salePrice-{salePrice}-</Box>
                <Box component="span">promotionPercent-{promotionPercent}-</Box>
                <Box component="span">originaPercent-{originalPrice}-</Box>
            </Box>
        </div >
    );
}

export default ProductInfo;