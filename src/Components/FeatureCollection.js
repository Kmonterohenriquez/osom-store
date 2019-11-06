import React from 'react';
import '../Css/FeatureCollection.css';

function FeatureCollection(){
    return(
        <div className='FeatureCollection-container '>
            <h1>Feature Collection</h1>
            <hr />
            <div className='FeatureCollection-grid sm-container'>
                <div className='mens topBox'>
                    {/* <img src='http://lorempixel.com/400/200/' alt='#'/> */}
                    <p>Mens</p>
                </div>
                <div className='womens topBox'>
                    {/* <img src='http://lorempixel.com/400/200/' alt='#'/> */}
                    <p>Womens</p>
                </div>  
                <div className='bags bottomBox'>
                    {/* <img src='http://lorempixel.com/400/200/' alt='#'/> */}
                    <p>Bags</p>
                </div>  
                <div className='outdoors bottomBox'>
                    {/* <img src='http://lorempixel.com/400/200/' alt='#'/> */}
                    <p>Outdoors</p>
                </div>    
                <div className='home bottomBox'>
                    {/* <img src='http://lorempixel.com/400/200/' alt='#'/> */}
                    <p>Home</p>
                </div>  
            </div>
        </div>
    )
}

export default FeatureCollection