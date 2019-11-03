import React, { Component} from 'react';
import '../Css/ItemSection.css'

class ItemSection1 extends Component{
    static defaultProps={
        bootPrice: 310,
        backpackPrice: 128,
        coatPrice: 188,
    }
    
    render(){
        const {bootPrice, backpackPrice, coatPrice } = this.props; 
        return(

            <div className='ItemSection1-container sm-container'>
                <h1>{ this.props.title }</h1>
                <hr />
                <div className='ItemSection1-grid'>
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
                </div>

            </div>
        )
    }
}
export default ItemSection1;