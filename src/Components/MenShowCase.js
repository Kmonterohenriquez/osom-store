import React, { Component } from 'react';
import '../Css/MenShowcase.css';
import manPic from '../Img/men-showcase.jpg';
// import manPic2 from '../Img/man-picture.jpg';

class MenShowCase extends Component {
    render(){
        return(
            <div className='MenShowCase-container'>
                <img src={manPic} alt='Man picture'/>
            </div>
        )
    }
}

export default MenShowCase;