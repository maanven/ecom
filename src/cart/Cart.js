import {React,useEffect,useState} from 'react';
import '../styles/cart.css';
import redShirt from '../images/redtshirt.jpg';
import {XLg, Pencil} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import axios from "axios";

function UserCart()
{
    
    let finalValue=0;
    let userCart,userCartFinal;
    const [finalCart,setFinalCart] = useState([]);

    if(localStorage.getItem('product'))
    {
        userCart=JSON.parse(localStorage.getItem('product'));  //converting string top object
        userCartFinal=Object.values(userCart); //converting object to array
    }

    useEffect(()=>{
        setFinalCart(userCartFinal);
    },[finalCart]);

    const placeOrder = () =>{
        axios.post("http://www.shubhansh.xyz/m/react_api/dashboard.php",{placeOrder : '1', userId : '1' , orderId : '101', productData : JSON.stringify(finalCart) }).then((response) =>{
            console.log('order placed');
        })
    }

   return(
    <div className="container-fluid">
        <div className="row mt-5">
            <div className='col-md-12'>
                <center><h2>Cart</h2></center>
            </div>   
        </div>
        <div className='row mt-3'>
            <div className='col-md-7'>
                {
                finalCart.map((value,index)=>{ // we can pass 2 var in map first is object to access value second is array index
                    finalValue=((parseInt(value.xs)+parseInt(value.s)+parseInt(value.m))*parseInt(value.price))+finalValue;
                    return <IndividualCart index={index} finalCart={finalCart} setFinalCart={setFinalCart} name={value.name} color={value.color} price={value.price} xs={value.xs} s={value.s} m={value.m} />
                })
                }
            </div>
            <div className='col-md-4'>
                <p className='mt-5 font_prop'>Cart Total</p>
                <div className="row border_bottom">
                    <div className='col-md-12'>

                    </div>
                </div>
                <div className="row border_bottom">
                    <div className='col-md-6'>
                       <p className='font_prop mt-5'>SUBTOTAL </p>
                    </div>
                    <div className='col-md-6'>
                       <p className='font_prop mt-5'>Rs 275 </p>        
                    </div>
                </div>
                <div className="row">
                   <div className='col-md-6'>
                       <p className='font_prop3 mt-5'>TOTAL </p>
                    </div>
                    <div className='col-md-6'>
                       <p className='font_prop3 mt-5'>Rs {finalValue} </p>        
                    </div>
                </div>
                <div className="d-grid gap-2">    
                    <Button variant="warning" className='mt-5' size='lg' onClick={placeOrder}>
                     Checkout
                    </Button>
                </div> 
                <p className='mt-5 font_prop'>Continue Shopping</p>  
            </div>
            <div className='col-md-1'>

            </div>
        </div>
        {/* <div className="row">
            <div className="col-md-1">
            <center><XLg size={30} color='black' className='mt-5'/></center>
            </div>
            <div className="col-md-3">
                <img src={redShirt}  className="product_img" alt="redtshirt"></img>    
                    <center><Button variant="outline-warning" className='mt-3'>
                       <Pencil size={20}/> Edit
                    </Button></center>
            </div>
            <div className="col-md-3">
                <p className='mt-5 font_prop'>Round neck fullsleeve tshirt </p>
                <div className="row">
                    <div className="col-md-6">
                    <p className='mt-1 font_prop1'>Prints </p>
                    <p className='font_prop1'>Print Charges </p>
                    <p className='font_prop1'>Tshirt MRP </p>
                    <p className='font_prop1'>Price per piece </p>
                    <p className='font_prop1'>Quantity </p>
                    <p className='font_prop'>Sub-Total </p>
                    
                    </div>
                    <div class="col-md-6">
                    <p className='mt-1 font_prop2'>NA </p>  
                    <p className='font_prop2'>0 </p>
                    <p className='font_prop2'>Rs 275 </p>
                    <p className='font_prop2'>Rs275 </p>
                    <p className='font_prop2'>1 </p> 
                    <p className='font_prop'>Rs 275 </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <p className='mt-5 font_prop'>Cart Total</p>
                <div className="row border_bottom">
                    <div className='col-md-12'>

                    </div>
                </div>
                <div className="row border_bottom">
                    <div className='col-md-6'>
                       <p className='font_prop mt-5'>SUBTOTAL </p>
                    </div>
                    <div className='col-md-6'>
                       <p className='font_prop mt-5'>Rs 275 </p>        
                    </div>
                </div>
                <div className="row">
                   <div className='col-md-6'>
                       <p className='font_prop3 mt-5'>TOTAL </p>
                    </div>
                    <div className='col-md-6'>
                       <p className='font_prop3 mt-5'>Rs 275 </p>        
                    </div>
                </div>
                <div className="d-grid gap-2">    
                    <Button variant="warning" className='mt-5' size='lg'>
                     Checkout
                    </Button>
                </div> 
                <p className='mt-5 font_prop'>Continue Shopping</p>   
            </div>
            <div className='col-md-1'>
            </div>
        </div> */}
    </div>

   )
} 
function IndividualCart({index,finalCart, setFinalCart,name,color,price,xs,s,m}){
    const handleDelete = (deleteItem) => {
        let remainingCart=finalCart.filter((value,i)=> i !== deleteItem);
        setFinalCart(remainingCart);
        localStorage.setItem('product',JSON.stringify(remainingCart));
    }
    
return <>
<div className="row">
            <div class="col-md-1"></div>
            <div className="col-md-1">
            <center><XLg size={30} color='black' className='mt-5' onClick={()=>handleDelete(index)}/></center>
            </div>
            <div className="col-md-3">
                <img src={require('../images/'+name+'/'+color+'.png')}  className="product_img" alt="redtshirt"></img>    
                    <center><Button variant="outline-warning" className='mt-3'>
                       <Pencil size={20}/> Edit
                    </Button></center>
            </div>
            <div className="col-md-4">
                <p className='mt-5 font_prop'>Round neck fullsleeve tshirt </p>
                <div className="row">
                    <div className="col-md-6">
                    <p className='mt-1 font_prop1'>Prints </p>
                    <p className='font_prop1'>Print Charges </p>
                    <p className='font_prop1'>Tshirt MRP </p>
                    <p className='font_prop1'>Price per piece </p>
                    <p className='font_prop1'>Quantity </p>
                    <p className='font_prop'>Sub-Total </p>
                    
                    </div>
                    <div class="col-md-6">
                    <p className='mt-1 font_prop2'>NA </p>  
                    <p className='font_prop2'>0 </p>
                    <p className='font_prop2'>{price}</p>
                    <p className='font_prop2'>{price}</p>
                    <p className='font_prop2'>{parseInt(xs)+parseInt(s)+parseInt(m)} </p> 
                    <p className='font_prop'>{(parseInt(xs)+parseInt(s)+parseInt(m))*parseInt(price)} </p>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
            </div>
        </div>
</>
}

export default UserCart;