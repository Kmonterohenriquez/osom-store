import React from 'react';
import '../Css/Footer.css';


function Footer(){
    return(
        <div className='Footer-container sm-container'>
            <ul>
                <li className='links'><a href='/'>Return policy</a></li>
                <li className='links'><a href='/'>Search our store</a></li>
                <li className='links'><a href='/'>Blog</a></li>
                <li className='links'><a href='/'>Contact us</a></li>
                <li className='links'><a href='/'>About us</a></li>
                <li className='links'><a href='/'>Facebook</a></li>
                <li className='links'><a href='/'>Pinterest</a></li>
                <li className='links'><a href='/'>Instagram</a></li>
            </ul>
        </div>
    )
}

export default Footer