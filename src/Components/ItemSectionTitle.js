import React, {Component} from 'react';
import '../Css/ItemSectionTitle.scss';

class ItemSectionTitle extends Component{
    render(){
        return(
        <div className='ItemSectionTitle-container'>
            <p> {this.props.title} </p>
            <hr />
        </div>
        )
    }
}

export default ItemSectionTitle;







