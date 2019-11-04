import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ItemSectionTitle  from '../Components/ItemSectionTitle';
import ItemSection1  from '../Components/ItemSection1';


class Outdoor extends Component {
    render(){
        return(
            <div className='Outdoor-container'>
                <Navbar color='black'/>
                <ItemSectionTitle  title='Outdoor'/>
                <ItemSection1 />
                <Footer />
            </div>
        )
    }
}

export default Outdoor;