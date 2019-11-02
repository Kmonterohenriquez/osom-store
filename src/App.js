import React, { Component} from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom";
import Home from './Pages/Home';
import Men from  './Pages/Men';
import Women from './Pages/Women';
import Bag from './Pages/Bag';
import Indoor from './Pages/Indoor';

class App extends Component {
    render(){
        return(
            <div>
                <Router>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/mens' component={ Men } />
                    <Route exact path='/women' component={ Women }/>
                    <Route exact path='/bag' component={ Bag }/>
                    <Route exact path='/indoor' component={ Indoor }/>
                </Router>
            </div>
        )
    }
}

export default App;
