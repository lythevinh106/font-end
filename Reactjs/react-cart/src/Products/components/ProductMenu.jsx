import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Link, useLocation, useMatch } from 'react-router-dom';

ProductMenu.propTypes = {

};

function ProductMenu({ product }) {

    const location = useLocation();
    // const pathname = useRef(location.pathname);
    // console.log(pathname);


    return (
        <div>
            <Box>
                <li>
                    <Link to="" > Description</Link>
                    <Link to={"additional"}> Addtion</Link>
                    <Link to={"review"}> Review</Link>
                </li>
            </Box>
        </div>
    );
}

export default ProductMenu;