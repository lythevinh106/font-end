import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Grid, Skeleton } from '@mui/material';
import Product from './Product';



function ProductList({ data }) {
    return (
        <Box>
            <Grid container>


                {data.map(product => (

                    <Grid item key={product.id} xs={12} sm={6} md={6} lg={3}>
                        <Box padding={1}>
                            <Product product={product} />
                        </Box>

                    </Grid>

                ))}


            </Grid>
        </Box>
    );
}

export default ProductList;