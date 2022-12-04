import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { rootApi } from './rootApi';
import userApi from './userApi';

DemoAxios.propTypes = {

};

function DemoAxios(props) {

    useEffect(() => {


        (async () => {

            const dataToApi = {
                name: "Britney Gleason 925",
                age: 25,
                mark: 7.6,
                gender: "female",
                createdAt: 1633700485643,
                updatedAt: 1633700485643,
                city: "pt",
            }

            const getAll = await userApi.addUser(dataToApi);

            const data = await getAll.data;

            console.log(data)

        })();







    }, [])
    return (
        <div>

        </div>
    );
}

export default DemoAxios;