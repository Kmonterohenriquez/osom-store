import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ItemSectionTitle  from '../Components/ItemSectionTitle';
import ItemSection1  from '../Components/ItemSection1';
import ItemSection2  from '../Components/ItemSection2';


class Womens extends Component {
    render(){
        return(
            <div className='Women-container'>
                <Navbar color='black'/>
                <ItemSectionTitle  title='Womens'/>
                <ItemSection1 />
                <ItemSection2 />
                <ItemSection1 />
                <Footer />
            </div>
        )
    }
}

export default Womens;