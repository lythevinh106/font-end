import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Grid, Skeleton } from '@mui/material';


ProductSkeleton.propTypes = {
    length: PropTypes.number,
};
ProductSkeleton.defaultProps = {
    length: 6
};

function ProductSkeleton({ length }) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item key={index}>
                        <Box padding={1}>
                            <Skeleton variant="rectangular" width="100%" height={118} />
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>

                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductSkeleton;