import React, { Component } from 'react';
import '../Css/Navbar.css';
import logo from '../Img/logo.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <div className='navbar container'>
                <Link className='navbar-logo' to='/'><img src={logo}/></Link>
                <nav>
                    <ul>
                        <li className='navbar-links'><Link to='/mens'>Mens</Link></li>
                        <li className='navbar-links'><Link to='/women'>womens</Link></li>
                        <li className='navbar-links'><Link to='/bags'>Bags</Link></li>
                        <li className='navbar-links'><Link to='/home'>Home</Link></li>
                        <li className='navbar-links'><Link to='/outdoor'>Outdoor</Link></li>
                        <li><Link to='/search'><i className="fas fa-search"></i></Link></li>
                        <li><Link to=''><i className="fas fa-shopping-cart"></i></Link></li>
                    </ul>    
                </nav>
            </div>
        )
    }
}

export default Navbar;