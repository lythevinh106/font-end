import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import ContentB from './ContentB';
import "./app.css"
import ContentC from './ContentC';

HocUseContext1.propTypes = {

};

//////có 3 bước

/// bước 1 tạo Content


export const ThemeContext = createContext();

///bước 2:Provider: cung caaps


//bước 3:Consumer:khach hang(noi nhan)


function HocUseContext1(props) {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {

        setTheme(theme === "dark" ? "light" : "dark");

    }

    return (

        <ThemeContext.Provider value={theme}>
            {/* ///tat ca cac côpnent con đều nhận được cái dữ liêu value theme
            /// cho nen có thể bỏ props */}
            <div style={{ padding: 20 }}>
                <button onClick={toggleTheme} >Toggle Theme</button>
                {/* /////truyen thang qua C k can B trung gian */}
                <ContentC />
            </div>
        </ThemeContext.Provider>
    );
}

export default HocUseContext1;