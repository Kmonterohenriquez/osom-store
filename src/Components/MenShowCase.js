import React, { Component } from 'react';
import '../Css/MenShowcase.css';
import manPic from '../Img/men-showcase.jpg';


class MenShowCase extends Component {
    render(){
        return(
            <div className='MenShowCase-container'>
                <img src={manPic} alt='Man'/>
            </div>
        )
    }
}

export default MenShowCase;