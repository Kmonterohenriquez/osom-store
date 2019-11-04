import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Message.css';

function Message (){
    return(
        <div className='sm-container'>
        <div className='message-container '>
                <p>
                    Our products are inspired by the people and world around us. Beautiful, high quality goods that are designed especially for you. Discover <Link className='ourStory' to='/'>Our Story</Link> and meet the people that make our brand what it is.
                </p>
        </div>    
        </div>
    )
}

export default Message