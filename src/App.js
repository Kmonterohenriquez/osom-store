import React, { Component} from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom";
import Home from './Pages/Home';
import Men from  './Pages/Men';
import Women from './Pages/Women';
import Bag from './Pages/Bag';
import Outdoor from './Pages/Outdoor';
import HomeItems from './Pages/HomeItems';

class App extends Component {
    render(){
        return(
            <div>
                <Router>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/mens' component={ Men } />
                    <Route exact path='/women' component={ Women }/>
                    <Route exact path='/bags' component={ Bag }/>
                    <Route exact path='/Home' component={ HomeItems }/>
                    <Route exact path='/outdoor' component={ Outdoor }/>
                </Router>
            </div>
        )
    }
}

export default App;
