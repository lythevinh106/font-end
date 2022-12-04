import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton, Typography } from '@mui/material';
import { useMatch, useNavigate } from 'react-router-dom';

Product.propTypes = {

};

function Product({ product }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${product.id}`);

    }
    return (
        <div onClick={handleClick}>
            {/* <Skeleton varient="rect" width="100%" height={118}> </Skeleton> */}
            <img
                src={`https://api.ezfrontend.com${product.thumbnail?.url}`}
            />
            <Typography>
                {product.name}
            </Typography>

            <Typography>
                {

                    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)
                }

            </Typography>
        </div>
    );
}

export default Product;