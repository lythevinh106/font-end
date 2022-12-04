import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes, useRouteMatch } from 'react-router-dom';
import ListPage from './ListPage';
import DetailPage from './DetailPage';

NestedRoute.propTypes = {

};

function NestedRoute(props) {


    return (
        <div>
            <Routes>
                <Route path='/todo' element={<ListPage />} exact ></Route>
                <Route path='/todo/:toId' element={<DetailPage />}  ></Route>

            </Routes>
        </div >
    );
}

export default NestedRoute;