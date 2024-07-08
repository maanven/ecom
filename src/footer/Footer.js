import React from'react';
import '../styles/footer.css';

function Footer()
{
    return(
            <div className="container-fluid footer_bg">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-2">
                        <h2>Contact us</h2>  
                        <h2>about us</h2>
                    </div>
                    <div className="col-md-2">
                        <h2>Products</h2>  
                        <h2>FAQs</h2>   
                    </div>
                    <div className="col-md-2">
                    <h2>Contact us</h2>  
                    <h2>Contact us</h2>   
                    </div>
                    <div className="col-md-3">
                        
                    </div>
                </div>
                <div className="row row_padding">
                    <h2>
                       <center>Copyright @2020</center> 
                    </h2>
                </div>
                <div className="row mt-5 bottom_border">
                    
                </div>
            </div>
    );
}

export default Footer;