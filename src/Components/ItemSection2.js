import React, { Component} from 'react';
import '../Css/ItemSection2.css'

class ItemSection1 extends Component{
    static defaultProps={
        bootPrice: 310,
        backpackPrice: 128,
        coatPrice: 188,
    }
    
    render(){
        const {bootPrice, backpackPrice, coatPrice } = this.props; 
        return(

            <div className='ItemSection-container sm-container'>
                <h1>{ this.props.title }</h1>
                <hr />
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
export default ItemSection1;