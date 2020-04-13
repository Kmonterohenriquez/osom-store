import React, { Component} from 'react';
import '../Css/ItemSection.scss';
import '../Css/ItemSection2.scss';


class ItemSection2 extends Component{
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
                <div className='ItemSection2-grid'>
                    <div className='smBox cap'>
                        <div className='smHolder'>
                        <img src="http://lorempixel.com/200/200/" alt=''/>
                        </div>
                        <div className='price'>
                            <p>{ item1Name } - <span>${item1Price}</span></p>
                        </div>
                    </div>
                    <div className='smBox backback2'>
                        <img src='' alt=''/>
                        {/* <div className='price'> */}
                        <div className='smHolder'>
                            <img src="http://lorempixel.com/300/200/" alt=''/>
                        </div>
                        <div className='price'>
                            <p>{ item2Name } - <span>${item2Price}</span></p>
                        </div>
                    </div>
                    <div className='lgBox shirt'>
                        {/* <img src='' alt=''/> */}
                        <div className='lgHolder'>
                            <img src="http://lorempixel.com/300/301/" alt=''/>                            </div>                        
                        <div className='price'>
                            <p>{ item3Name } - <span>${item3Price}</span></p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default ItemSection2;