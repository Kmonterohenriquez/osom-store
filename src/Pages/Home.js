import React, {Component} from 'react';
import Navbar from '../Components/Navbar';
import Title from '../Components/Title';
import Message from '../Components/Message';
import FeatureCollection from '../Components/FeatureCollection';
import ItemSectionTitle from '../Components/ItemSectionTitle';
import ItemSection1 from '../Components/ItemSection1';
import ItemSection2 from '../Components/ItemSection2';
import Subscribe from '../Components/Subscribe';
import Footer from '../Components/Footer';


class Home extends Component  {
  render(){   
    return (
        <div className="Home">
          <div className='showcase'>
            <Navbar />
            <Title 
                  title='Kevin Montero' 
                  subTitle='Fresh Style'
            />
          </div>
          {/* Message About Our Store */}
          <Message />

          {/* Womens Section */}
          <FeatureCollection />

          {/* Mens Section */}
          <div className='Section-container'>
            <ItemSectionTitle title='Featured Products' />
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
