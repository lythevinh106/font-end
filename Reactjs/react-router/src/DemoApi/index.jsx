import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import categoryApi from '../api/CategoryApi';

DemoApi.propTypes = {

};

function DemoApi(props) {


    useEffect(() => {


        const fetchProducts = async () => {
            const CategoryList = await categoryApi.getAll()

            console.log(CategoryList);
        }

        fetchProducts()
    }, [])
    return (
        <div>

        </div>
    );
}

export default DemoApi;