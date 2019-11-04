import React, { Component } from 'react';
import '../Css/Men.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ItemSectionTitle  from '../Components/ItemSectionTitle';
import ItemSection1  from '../Components/ItemSection1';
import ItemSection2  from '../Components/ItemSection2';
import MenShowCase from '../Components/MenShowCase';


class Men extends Component {
    render(){
        return(
            <div className='Men-container'>
                <Navbar color='black'/>
                <MenShowCase />
                <ItemSectionTitle  title='Mens'/>
                <ItemSection1 />
                <ItemSection2 />
                <Footer />
            </div>
        )
    }
}

export default Men;