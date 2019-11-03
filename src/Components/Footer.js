import React from 'react';
import '../Css/Footer.css';


function Footer(){
    return(
        <div className='sm-container'>
            <div className='Footer-container'>
                <hr />
                <div className='Footer-grid'>
                    <ul>
                        <li className='links'><a href='/'>Return policy</a></li>
                        <li className='links'><a href='/'>Search our store</a></li>
                        <li className='links'><a href='/'>Blog</a></li>
                        <li className='links'><a href='/'>Contact us</a></li>
                        <li className='links'><a href='/'>About us</a></li>
                        <li className='links'><a href='/'><i class="fab fa-facebook-f"></i>Facebook</a></li>
                        <li className='links'><a href='/'><i class="fab fa-twitter"></i>Twitter</a></li>
                        <li className='links'><a href='/'><i class="fab fa-instagram"></i>Instagram</a></li>
                    </ul>
                </div>    
            </div>
            <p className='myRights'>© 2019 <a href='https://kevinmontero.netlify.com/'>Kevin Montero</a></p>
        </div>
    )
}

export default Footer