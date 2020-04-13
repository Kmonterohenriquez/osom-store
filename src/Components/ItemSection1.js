import React, { Component} from 'react';
import '../Css/ItemSection.scss';
import '../Css/ItemSection1.scss';


class ItemSection1 extends Component{
    static defaultProps={
        item1Name: 'Cap',
        item2Name: 'backback2',
        item3Name: 'shirt',
        item1Price: 310,
        item2Price: 128,
        item3Price: 188,
    }
    
    render(){
        const { item1Name, item2Name, item3Name, item1Price, item2Price, item3Price } = this.props; 
        return(

            <div className='ItemSection-container sm-container'>
                <div className='ItemSection1-grid'>
                    <div className='smBox cap'>
                        <div className='smHolder'>
                        <img src="http://lorempixel.com/300/200/" alt=''/>

                        </div>
                        <div className='price'>
                            <p>{ item1Name } - <span>${item1Price}</span></p>
                        </div>
                    </div>
                    <div className='smBox backback2'>
                    
                        
                        {/* <div className='price'> */}
                        <div className='smHolder'>
                            <img src="http://lorempixel.com/300/300/" alt=''/>
                        </div>
                        <div className='price'>
                            <p>{ item2Name } - <span>${item2Price}</span></p>
                        </div>
                    </div>
                    <div className='lgBox shirt'>
                        <div className='lgHolder'>
                            <img src="http://lorempixel.com/600/600/" alt=''/>
                        </div>                        
                        <div className='price'>
                            <p>{ item3Name } - <span>${item3Price}</span></p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default ItemSection1;