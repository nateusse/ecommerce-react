import React from 'react'
import './NavBar.css'
import logo from '../../assets/cabina_creaciones.png';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

export default function NavBar() {

    return(
        <AppBar position="static">
            <nav>
                <div className="container-logo">
                    <img src={logo} alt="Logo ecommerce"/>
                </div>
                <ul>
                    <li><Button variant="outlined">Home</Button></li>
                    <li><Button variant="outlined">Products</Button></li>
                    <li><Button variant="outlined">About us</Button></li>
                    <li><Button variant="outlined">Contact</Button></li>
                    
                </ul>   
            </nav>
        </AppBar>
    )
}