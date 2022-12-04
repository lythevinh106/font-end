import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import CategoryApi from '../../../api/CategoryApi';

FilterByCategory.propTypes = {

};

function FilterByCategory({ onChange }) {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const list = await CategoryApi.getAll();

                const newList = list.map(x => (
                    {
                        id: x.id,
                        name: x.name
                    }
                ))


                setCategoryList(newList);

            } catch (error) {

            }
        })()
    }, []);


    // console.log(categoryList);

    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category.id)

        }
    }
    return (

        <div>
            <Typography>Danh muc san pham</Typography>

            <ul>
                {categoryList.map((category) => (
                    <li key={category.id}
                        onClick={() => { handleCategoryClick(category) }}>{category.name}</li>
                ))}
            </ul>
        </div>

    );
}

export default FilterByCategory;