import React, {Component} from 'react';
import Navbar from '../Components/Navbar';
import Title from '../Components/Title';
import Message from '../Components/Message';
import FeatureCollection from '../Components/FeatureCollection';
import FeaturedProducts from '../Components/FeaturedProducts';
import Subscribe from '../Components/Subscribe';
import Footer from '../Components/Footer';

class Home extends Component  {
  render(){   
    return (
        <div className="Home">
          <div className='showcase'>
            <Navbar />
            <Title />
          </div>
            <Message />
            <FeatureCollection />
            <FeaturedProducts title='Featured Products'/>
            <Subscribe />
            <Footer />
        </div>
      )
    }
}

export default Home;
