import {React, useState, useEffect} from "react";
import '../styles/products.css';
import Button from 'react-bootstrap/Button';
import { useSearchParams } from 'react-router-dom';
import axios from "axios";

function ProductDescription()
{
    const [variants, setVariants] = useState([]);
    const [productType] = useSearchParams();
    const[selectedVar, setSelectedVar]=useState('black');
    const[sizeS,setSizeS]=useState(0);
    const[sizeXS,setSizeXS]=useState(0);
    const[sizeM,setSizeM]=useState(0);
    const[sizeL,setSizeL]=useState(0);
    const[sizeXL,setSizeXL]=useState(0);
    const[sizeXXL,setSizeXXL]=useState(0);
    const[cart,setCart]=useState([]);
    let sizeArr=[];
    const[productValue,setProductValue]=useState([]);
    let name='Half Tshirt';
    let price=0;
    let description='';

    
    useEffect(()=>{
       axios.get("http://www.shubhansh.xyz/m/react_api/dashboard.php?Ttype=1&pName="+productType.get('type')).then((response)=>{
            setVariants(response.data);
       });

       axios.get("http://www.shubhansh.xyz/m/react_api/dashboard.php?indiProduct=1&pName="+productType.get('type')).then((response)=>{
            setProductValue(response.data)
       });
       if(localStorage.getItem('product'))
       {
            let existingCart=Object.values(JSON.parse(localStorage.getItem('product')));
            existingCart.map((element)=>{
                let newArr={'name': element.name,'price':element.price,'color':element.color,'xs': element.xs ,'s':element.s,'m':element.m};
                let oldArr=cart;
                setCart(oldArr => [...oldArr,newArr]);
            })
            
       }
    },[]);
    useEffect(()=>{
        localStorage.setItem('product',JSON.stringify(cart));
    },[cart])
    
    variants.map((variant)=>{
        if(variant.color_name === 'black')
        {
            sizeArr.push(variant.XS,variant.S,variant.M,variant.L,variant.XL,variant.XXL);
        }
    });

    productValue.map((product)=>{
        name=product.name;
        price=product.price;
    });

    const cartHandler=()=>{
        if(sizeXS > sizeArr[0] || sizeS>sizeArr[1] || sizeM>sizeArr[2] || sizeL>sizeArr[3] || sizeXL>sizeArr[4] || sizeXXL>sizeArr[5])
        {
            console.log("not enough inventory");
        }
        else{
            let newArr={'name': name,'price':price,'color':selectedVar,'xs': sizeXS ,'s':sizeS,'m':sizeM};
            let oldArr=cart;
            setCart(oldArr => [...oldArr,newArr]);
        }
    }

    const handleColor = (colorName) =>{
        setSelectedVar(colorName);
        sizeArr=[];
        variants.map((variant)=>{
            if(variant.color_name === colorName)
            {
                sizeArr=[variant.XS, variant.S, variant.M, variant.L, variant.XL, variant.XXL]
            }
        })
        console.log(sizeArr)
    }
   
    return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <center><h2 className="mt-5">Product description</h2></center>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-5">
                        <img src={require('../images/'+name+'/'+selectedVar+'.png')} className="product_image" alt="red_tshirt"></img>
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-4 product_text">
                        <h3>{name}</h3><br/>
                        <span className="rs_font">{price} Rs./</span><br/>
                        <p>(price without print)</p>
                        <br/>
                        <br />
                        <p className="fab_col">Fabric color</p>
                           <div>
                            {
                                variants.map((variant)=><span className="color_circle" style={{'backgroundColor':variant.color_code}} onClick={()=>handleColor(variant.color_name)}></span>)
                            }
                            </div>
                        <div className="row mt-5">
                            <div className="col-md-5">
                                <span className="s_q">Size & Quantity</span>
                            </div>
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-5">
                            <span className="size_chart">Size Chart</span>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-1 tsize_box4">
                                <input type="text"  value="XS"className="input_box"></input>
                            </div>
                            <div className="col-md-4 tsize_box4">
                                <input type="number" name="amount" className="input_box" value={sizeXS} onChange={(e)=>setSizeXS(e.target.value)}></input>
                             </div>
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-1 tsize_box4">
                                 <input type="text"  value="S"className="input_box"></input>
                            </div>
                            <div className="col-md-4 tsize_box4">
                            <input type="number" name="amount1" className="input_box" value={sizeS} onChange={(e)=>{setSizeS(e.target.value)}}></input>
                            </div>     
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-1 tsize_box4">
                                <input type="text"  value="M"className="input_box"></input>
                            </div>
                            <div className="col-md-4 tsize_box4">
                                <input type="number" name="amount" className="input_box" value={sizeM} onChange={(e)=>{setSizeM(e.target.value)}}></input>
                             </div>
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-1 tsize_box4">
                                 <input type="text"  value="L"className="input_box"></input>
                            </div>
                            <div className="col-md-4 tsize_box4">
                            <input type="number" name="amount1" className="input_box" value={sizeL} onChange={(e)=>{setSizeL(e.target.value)}}></input>
                            </div>     
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-1 tsize_box4">
                                <input type="text"  value="XL"className="input_box"></input>
                            </div>
                            <div className="col-md-4 tsize_box4">
                                <input type="number" name="amount" className="input_box" value={sizeXL} onChange={(e)=>{setSizeXL(e.target.value)}}></input>
                             </div>
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-1 tsize_box4">
                                 <input type="text"  value="XXL"className="input_box"></input>
                            </div>
                            <div className="col-md-4 tsize_box4">
                            <input type="number" name="amount1" className="input_box" value={sizeXXL} onChange={(e)=>{setSizeXXL(e.target.value)}}></input>
                            </div>     
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-12">
                            <div className="d-grid gap-2">
                                <Button variant="warning" size="lg" onClick={cartHandler}>
                                    Add to cart
                                </Button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-1">
                    </div>
                </div>  
            </div> 

    )
}
export default ProductDescription;


