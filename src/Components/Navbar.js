import React, { Component } from 'react';
import '../Css/Navbar.css';
import logo from '../Img/logo.png';

class Navbar extends Component {
    render(){
        return(
            <div className='navbar container'>
                <a className='navbar-logo'><img src={logo}/></a>
                <nav>
                    <ul>
                        <li className='navbar-links'><a href='/mens'>Mens</a></li>
                        <li className='navbar-links'><a href='/women'>womens</a></li>
                        <li className='navbar-links'><a href='/bags'>Bags</a></li>
                        <li className='navbar-links'><a href='/home'>Home</a></li>
                        <li className='navbar-links'><a href='/home'>Outdoor</a></li>
                        <li><a href='/search'><i className="fas fa-search"></i></a></li>
                        <li><a href=''><i className="fas fa-shopping-cart"></i></a></li>
                    </ul>    
                </nav>
            </div>
        )
    }
}

export default Navbar;