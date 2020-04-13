import React from 'react';
import ItemSectionTitle from '../Components/ItemSectionTitle';
import '../Css/AboutUs.sass';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function AboutUs(){
    return(
        <div className='AboutUs-container'>
            <div className='sm-container'>
                <Navbar color='black'/>
                <ItemSectionTitle title='About Us'/>
                <p className='p-container'>
                    Our story began in 2001 in a small studio in the middle of nowhere. With only one desk and next to no free time, our brand was born. Our passion for unique design and collaboration brought our vision, and products, to life.
                </p>
                <img src='http://lorempixel.com/600/300/' alt='AboutUs Img'/>
                <h1>WELCOME TO OUR WORLD</h1>
                <p className='p-container'>
                    Our products bring together the finest materials and stunning design to create something very special. We believe in quality, care, and creating unique products that everyone can enjoy. Colorful, creative, and inspired by what we see everyday, each product represents what we love about the world we live in. We hope they’ll inspire you too.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs