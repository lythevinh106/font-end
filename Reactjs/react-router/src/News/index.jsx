import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams, Link, Outlet } from "react-router-dom"
News.propTypes = {

};

function News(props) {
    let navigate = useNavigate();

    return (
        <div>
            day la trang new
            <Link to="/news/add" >Them bai viet</Link>

            <Link to="/news/25" >Chi tiet bai viet</Link>

            <Outlet />
        </div>

    );
}

export default News;