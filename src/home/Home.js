import React from "react";
import '../styles/home.css';
import Banner from'./banner.js';
import Product from'./Product.js';
import Testimonials from './Testimonials.js';

function Home()
{
    return(
            <div>
                <Banner/>
                <Product/>
                <Testimonials/>
            </div> 

    )
}
export default Home;