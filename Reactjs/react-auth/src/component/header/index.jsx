import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Button, Typography, makeStyles } from '@mui/material';

import { Link, NavLink, Route, Routes } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Register from '../../Auth/component/register';
import Login from '../../Auth/component/login';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { logout } from "../../Auth/userSlice"
Header.propTypes = {

};


const MODE = {
    LOGIN: "login",
    REGISTER: "register"
}



function Header(props) {


    const dispatch = useDispatch();
    const loogedInUser = useSelector(state => state.user.current)

    const isLoggedIn = !!loogedInUser.id
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }
    const handleLogout = () => {
        const action = logout();
        dispatch(action);
    }

    const [mode, setMode] = React.useState(MODE.LOGIN);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="h6">
                        Ez shop

                        <Link to="/"></Link>
                    </Typography>;

                    <NavLink to="/todo">
                        <button>todo</button>

                    </NavLink>
                    <NavLink to="/album">
                        <button>album</button>
                    </NavLink>

                    {isLoggedIn && (
                        <IconButton onClick={handleUserClick} >
                            da dang nhap
                        </IconButton>
                    )}

                    {!isLoggedIn && (
                        <Button color="inherit" onClick={handleClickOpen}>Login</Button>
                    )}

                </Toolbar>
            </AppBar>


            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}>

                <MenuItem onClick={handleLogout}>LogOut</MenuItem>


            </Menu >




            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register />


                            <Button
                                color="primary" onClick={() => setMode(MODE.LOGIN)} >
                                ban da co tai khoan, hay dang nhap
                            </Button>

                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login />


                            <Button
                                color="primary" onClick={() => setMode(MODE.REGISTER)} >
                                ban chua co tk?
                            </Button>

                        </>
                    )}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>

                </DialogActions>
            </Dialog>

        </div >
    );
}

export default Header;