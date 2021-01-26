import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItens from '../NavigationItens/NavigationItens';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItens isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;