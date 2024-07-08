import {React, useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import '../styles/home.css';
import axios from 'axios';
import { NavLink } from "react-router-dom";

function Product()
{
const [productList,setProductList] = useState([]);
useEffect(()=>{
    axios.get("http://www.shubhansh.xyz/m/react_api/dashboard.php?getProd=1").then((response)=>{
         setProductList(response.data);
    });
},[]);
return(
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
            <center>
                <h2 className="mt-5 mb-5"> Our Products</h2>
            </center>
            </div> 
        </div>
        <div className="row">
            <div className="col-md-1">

            </div>
            {
                productList.map((element)=>{
                    return <IndividualProduct name={element.name} price={element.price} />
                })
            }
            {/* <div className="col-md-5 product_box1">
                <center>    
                    <img src={Half} className="product_image mb-3" alt="halfTshirt"></img>
                    <h3>Half Tshirt- 250Rs/-</h3><br/>
                    <div>
                        {
                            Variants.map((Variant)=><span className="color_circle" style={{'backgroundColor':Variant.color}}></span>)
                        }    
                    </div>
                    <Button variant="warning" className="mt-5 mb-5 view_button">View</Button>
                </center>
            </div>
            <div className="col-md-5  product_box2">
                <center>   
                    <img src={Polo} className="product_image mb-3" alt="polo"></img>
                    <h3>Polo- 450Rs/-</h3><br/>
                    <div>
                        {
                            Variants.map((Variant)=><span className="color_circle" style={{'backgroundColor':Variant.color}}></span>)
                        }    
                    </div>
                    <Button variant="warning" className="mt-5 mb-5 view_button">View</Button>
                </center>
            </div>
            <div className="col-md-1">
                
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-1">

            </div>
            <div className="col-md-5 product_box1">
                <center>   
                     <img src={Full} className="product_image mb-3" alt="fullTshirt"></img>
                     <h3>Full Tshirt- 350Rs/-</h3><br/>
                     <div>
                        {
                            Variants.map((Variant)=><span className="color_circle" style={{'backgroundColor':Variant.color}}></span>)
                        }    
                    </div>
                    <Button variant="warning" className="mt-5 mb-5 view_button">View</Button>
                </center>
            </div>
            <div className="col-md-5  product_box2">
                <center>   
                    <img src={Hoodie} className="product_image mb-3" alt="hoodie"></img>
                    <h3>Hoodie- 50Rs/-</h3><br/>
                    <div>
                        {
                            Variants.map((Variant)=><span className="color_circle" style={{'backgroundColor':Variant.color}}></span>)
                        }    
                    </div>
                    <Button variant="warning" className="mt-5 mb-5 view_button">View</Button>
                </center>
            </div> */}
            <div className="col-md-1">
                
            </div>
        </div>     
    </div>
    ) 
}
function IndividualProduct({name,price}){

    const [Variants, setVariants] = useState([]);
    useEffect(()=>{
        axios.get("http://www.shubhansh.xyz/m/react_api/dashboard.php?Ttype=1&pName="+name).then((response)=>{
             setVariants(response.data);
        });
    },[]);
    
    return <>
            <div className="col-md-2 product_box1">
                <center>    
                    <img src={require('../images/'+name+'/black.png')} className="product_image mb-3" alt="halfTshirt"></img>
                    <h3>{name}- {price}Rs/-</h3><br/>
                    <div>
                        {
                            Variants.map((Variant)=><span className="color_circle" style={{'backgroundColor':Variant.color_code}}></span>)
                        }    
                    </div>
                    <NavLink to={"/products?type="+name}><Button variant="warning" className="mt-5 mb-5 view_button">View</Button></NavLink>
                </center>
            </div>
    </>
}

export default Product;