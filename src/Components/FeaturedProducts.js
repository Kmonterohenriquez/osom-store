import React, { Component} from 'react';
import '../Css/FeaturedProducts.css'

class FeaturedProducts extends Component{
    static defaultProps={
        bootPrice: 310,
        backpackPrice: 128,
        backpackPrice2: 98,
        coatPrice: 188,
        capPrice: 48,
        shirtPrice: 98,
    }
    
    render(){
        const {bootPrice, backpackPrice, backpackPrice2, coatPrice, capPrice,shirtPrice } = this.props; 
        return(

            <div className='FeaturedProducts-container sm-container'>
                <div className='FeaturedProducts-grid'>
                    <div className='lgBox boot'>
                        <img src='' alt=''/>
                        <div className='price'>
                            <p>boot - <span>${bootPrice}</span></p>
                        </div>
                    </div>
                    <div className='smBox backpack'>
                        <img src='http://lorempixel.com/150/200/' alt=''/>
                        <div className='price'>
                            <p>backpack - <span>${backpackPrice}</span></p>
                        </div>
                    </div>
                    <div className='smBox coat'>
                        <img src='' alt=''/>
                        <div className='price'>
                            <p>Coat - <span>${coatPrice}</span></p>
                        </div>
                    </div>
                    <div className='smBox cap'>
                        <img src='' alt=''/>
                        <div className='price'>
                            <p>Cap - <span>${capPrice}</span></p>
                        </div>
                    </div>
                    <div className='smBox backback2'>
                        <img src='' alt=''/>
                        <div className='price'>
                            <p>backback2 - <span>${backpackPrice2}</span></p>
                        </div>
                    </div>
                    <div className='lgBox shirt'>
                        <img src='' alt=''/>
                        <div className='price'>
                            <p>shirt - <span>${shirtPrice}</span></p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default FeaturedProducts;