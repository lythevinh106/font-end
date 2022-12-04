import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { Grid, Pagination, Paper, Typography } from '@mui/material';
import queryString from 'querystring';

import "./listpage.css";
import productApi from '../../api/productApi';
import ProductSkeleton from '../components/ProductSkeleton';
import ProductList from '../components/ProductList';
import ProductSort from '../components/ProductSort';
import ProductFilter from '../components/ProductFilter';
import FilterViewer from '../components/filters/FilterViewer';


function Listpage(props) {
    const navigate = useNavigate();
    const location = useLocation()

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    // const queryParam = queryString.parse(location.search);
    const [pagination, setPagination] = useState({
        limit: 10,
        total: 10,
        page: 1
    })

    const queryParam = queryString.parse(location.search);

    const [filter, setFilter] = useState({
        ...queryParam,
        page: Number.parseInt(queryParam.page) || 1,
        _limit: Number.parseInt(queryParam._limit) || 1,


        _sort: Number.parseInt(queryParam._sort) || "salePrice:ASC"
    })


    //////vi api bi loi nen phan trang bi loi
    useEffect(() => {
        (async () => {

            try {
                const { data, pagination } = await productApi.getAll(filter);

                console.log(pagination)
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log("that bai khi goi du lieu", error)
            }

            setLoading(false);

        })();

    }, [filter]);


    const handlePageChange = (e, page) => {


        setFilter(prv => ({
            ...prv, page: page

        }))
    };


    const handleSortChange = (newSortValue) => {
        setFilter(prv => ({
            ...prv,
            _sort: newSortValue

        }))

    };
    const handleFilterChange = (newFilters) => {
        setFilter(prv => ({
            ...prv,
            ...newFilters

        }))
        console.log(filter)

    };


    const setNewFilter = (newFilters) => {
        ////doan nay se overide lun filter cu
        setFilter(newFilters)
    }




    /// dong bo url
    useEffect(() => {

        navigate(location.pathname + "?" + queryString.stringify(filter));

    }, [navigate, filter])

    console.log(location);



    return (
        <Box>

            <Container>
                <Grid container spacing={1}>
                    <Grid item className="left">Left colum


                        <ProductFilter filter={filter} onChange={handleFilterChange} />
                    </Grid>

                    <Grid item className="right">
                        {/* se show sakelaton nhung bi loi nben bor qua */}
                        <Paper evalation={0}>
                            <ProductSort currentSort={filter._sort} onChange={handleSortChange} />
                            {loading ? <ProductSkeleton /> : <ProductList data={productList} />}
                            {/* <ProductList data={productList} /> */}
                            {/* day la phan filter dac biet */}
                            <FilterViewer filter={filter} onChange={setNewFilter} />
                        </Paper>

                        <Pagination count={Math.ceil(pagination.total / pagination.limit)} page={pagination.page} color="primary"

                            onChange={handlePageChange}
                        />

                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
}

export default Listpage;