import React from 'react';
import '../Css/Subscribe.css';


function Subscribe (){
 
    return(
        <div className='Subscribe-container'>
            <div className='sm-container'>
                <h1 className='title'>Subscribe to our newsletter</h1>
                <p className='description'>A short sentence describing what someone will receive by subscribing</p>
                <hr />
                <div className='whBg'>
                    <input type='text' placeholder='Your email' />
                    <button ><a src='#'>Subscribe</a></button>
                </div>
            </div>    
        </div>
    )
}

export default Subscribe;