
import React, { useState, useContext } from 'react';
import { ThemeContext } from '..';


function ContentC() {
    const theme = useContext(ThemeContext);
    return (
        <p className={theme}>
            Day la noi dung Content C
        </p>
    )
}

export default ContentC