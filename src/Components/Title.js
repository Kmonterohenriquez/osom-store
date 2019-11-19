import React, {Component} from 'react';
import '../Css/Title.css';

class Title extends Component {
    render(){
        return(
            <div className='title-container'>
                <h1
                data-sal="slide-down"
                data-sal-delay="600"
                data-sal-easing="ease-out-bounce"
                data-sal-duration="700">{ this.props.subTitle}</h1>
                <h2>{ this.props.title }</h2>
                <button type='submit'>Shop Mens</button>
            </div>
        )
    }
}

export default Title;