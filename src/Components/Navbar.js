import React, { Component } from 'react';
import '../Css/Navbar.scss';
import logoWhite from '../Img/logoWhite.png';
import logoBlack from '../Img/logoBlack.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
        const{ color }= this.props;
        return(
            <div className={`navbar nav-container ${color}`}>
                <div className='menu-btn'>
                    <div className='menu-line'></div>
                    <div className='menu-line'></div>
                    <div className='menu-line'></div>
                </div>
                <Link className='navbar-logo' to='/'><img src={color==='black'? logoBlack:logoWhite} alt='Logo'/></Link>
                <nav>
                    <ul>
                        <li className='navbar-links'><Link to='/mens'>Mens</Link></li>
                        <li className='navbar-links'><Link to='/women'>womens</Link></li>
                        <li className='navbar-links'><Link to='/bags'>Bags</Link></li>
                        <li className='navbar-links'><Link to='/home'>Home</Link></li>
                        <li className='navbar-links'><Link to='/outdoor'>Outdoor</Link></li>
                        <li><Link to='/search'><i className="fas fa-search"></i></Link></li>
                        <li><Link to=''><i className=" fas fa-shopping-cart"></i></Link></li>
                    </ul>    
                </nav>
            </div>
        )
    }
}

export default Navbar;