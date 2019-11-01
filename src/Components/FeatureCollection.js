import React from 'react';
import '../Css/FeatureCollection.css';

function FeatureCollection(){
    return(
        <div className='FeatureCollection-container '>
            <h1>Feature Collection</h1>
            <hr />
            <div className='FeatureCollection-grid sm-container'>
                <div className='mens topBox'>
                    <p>Mens</p>
                </div>
                <div className='womens topBox'>
                    <p>Womens</p>
                </div>  
                <div className='bags bottomBox'>
                    <p>Bags</p>
                </div>  
                <div className='outdoors bottomBox'>
                    <p>Outdoors</p>
                </div>    
                <div className='home bottomBox'>
                    <p>Home</p>
                </div>  
            </div>
        </div>
    )
}

export default FeatureCollection