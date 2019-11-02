import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Title from './Components/Title';
import Message from './Components/Message';
import FeatureCollection from './Components/FeatureCollection';
import FeaturedProducts from './Components/FeaturedProducts';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

class App extends Component  {
  render(){   
    return (
        <div className="App">
          <div className='showcase'>
            <Navbar />
            <Title />
          </div>
            <Message />
            <FeatureCollection />
            <FeaturedProducts />
            <Subscribe />
            <Footer />
        </div>
      )
    }
}

export default App;
