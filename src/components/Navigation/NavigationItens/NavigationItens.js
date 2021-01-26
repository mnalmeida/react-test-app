import React from 'react';
import NavigationItem from '../NavigationItens/NavigationItem/NavigationItem';
import classes from './NavigationItens.css';

const navigationItens = (props) => (
    <ul className={classes.NavigationItens}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        { props.isAuthenticated 
            ? <NavigationItem link="/orders" >Orders</NavigationItem> : null }
        { props.isAuthenticated 
            ? <NavigationItem link="/logout" >Logout</NavigationItem>
            : <NavigationItem link="/auth" >Authenticate</NavigationItem> }
    </ul>
);

export default navigationItens;