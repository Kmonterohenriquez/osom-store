import React, {Component} from 'react';
import '../Css/Title.css';

class Title extends Component {
    render(){
        return(
            <div className='title-container'>
                <h1>{ this.props.subTitle}</h1>
                <h2>{ this.props.title }</h2>
                <button type='submit'>Shop Mens</button>
            </div>
        )
    }
}

export default Title;