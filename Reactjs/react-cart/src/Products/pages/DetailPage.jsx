import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@mui/system';
import { Badge, Grid, IconButton, LinearProgress, Paper } from '@mui/material';
import './Detailpage.css'
import ProductThumbnail from '../components/ProductThumbnail';
import { Outlet, Routes, useLocation, useMatch, useParams, Route } from 'react-router-dom';
import useProductDetail from '../hocks/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



import ProductDescription from '../components/ProductDescription';
import ProductReview from '../components/ProductReview';
import ProductAdditional from '../components/ProductAdditional';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Cart/cartSlice';
import { cartItemsCountSelector } from '../../Cart/selector';


DetailPage.propTypes = {

};

export const DetailPageContext = createContext();

function DetailPage(props) {

    const { productId } = useParams();
    const dispatch = useDispatch();

    const cartItemCount = useSelector(cartItemsCountSelector);
    console.log(cartItemCount);

    const location = useLocation();
    console.log(productId);
    ////day la cusstomhock
    const { product, loading } = useProductDetail(productId);
    // console.log(product)
    if (loading) {
        return (
            <>
                <h1>Loading</h1>
                <LinearProgress />
            </>
        )
    }


    const handleAddToCartSubmit = (formvalues) => {
        const action = addToCart({
            id: product.id,
            product,
            quantity: formvalues.quantity
        })
        console.log(action);

        dispatch(action);
    }

    return (


        <DetailPageContext.Provider value={product}>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={cartItemCount} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            <Box>
                <Container>
                    <Paper className='wrapper'>
                        <Grid item className="left" >

                            <ProductThumbnail product={product} />

                        </Grid>
                        <Grid item className="right">

                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCartSubmit} />
                        </Grid>
                    </Paper>

                </Container>

                <ProductMenu product={product} />


                {/* <Routes>
                <Route index={true} element={<ProductDescription />}></Route>

                <Route path="additional" element={<ProductAdditional />} />
                <Route path="review" element={<ProductReview />} />
            </Routes> */}


                <Outlet />


            </Box >

        </DetailPageContext.Provider>
    );
}

export default DetailPage;