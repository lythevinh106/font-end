import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"
Contact.propTypes = {

};
/*  useNavigate*/
function Contact(props) {

    let navigate = useNavigate();
    return (
        <div>
            Trang Contact
            <button onClick={() => { navigate("/about") }}>den trang abput</button>
        </div>
    );
}

export default Contact;