import React, { Component } from 'react';
import '../Css/Men.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// import i from '../Components/FeaturedProducts';

class Men extends Component {
    render(){
        return(
            <div className='Men-container'>
                <Navbar />
                {/* <FeaturedProducts title='Mens'/> */}
                <Footer />
            </div>
        )
    }
}

export default Men;