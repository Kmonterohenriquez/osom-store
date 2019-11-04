import React, {Component} from 'react';
import Navbar from '../Components/Navbar';
import Title from '../Components/Title';
import Message from '../Components/Message';
import FeatureCollection from '../Components/FeatureCollection';
import Subscribe from '../Components/Subscribe';
import Footer from '../Components/Footer';
import ItemSection1 from '../Components/ItemSection1';
import ItemSection2 from '../Components/ItemSection2';


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
            <div className='Section-container'>
              <ItemSection1 />
              <ItemSection2 />
            </div>
            <Subscribe />
            <Footer />
        </div>
      )
    }
}

export default Home;
