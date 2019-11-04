import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ItemSectionTitle  from '../Components/ItemSectionTitle';
import ItemSection1  from '../Components/ItemSection1';


class HomeItems extends Component {
    render(){
        return(
            <div className='HomeItems-container'>
                <Navbar color='black'/>
                <ItemSectionTitle  title='Home'/>
                <ItemSection1 />
                <Footer />
            </div>
        )
    }
}

export default HomeItems;