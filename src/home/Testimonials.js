import {React, useState, useEffect} from "react";
import '../styles/home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardImg from './user.png'
import axios from "axios";
function Testimonials()
{
    const [reviewList,setReviewList] = useState([]);
    useEffect(()=>{
        axios.get("http://www.shubhansh.xyz/m/react_api/dashboard.php?getReview=1").then((response)=>{
             setReviewList(response.data);
        });
    },[]);
return(
    <div className="container-fluid">
        <div class="row mt-5">
            <div class="col-md-1">

            </div>
            {
                reviewList.map((element)=>{
                    return <Review name={element.name} review={element.review} />
                })
            }
            {/* <div class="col-md-10 box_inline" >
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cardImg} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="box_margin">
                <Card.Img variant="top" src={cardImg} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="box_margin">
                <Card.Img variant="top" src={cardImg} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="box_margin">
                <Card.Img variant="top" src={cardImg} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="box_margin">
                <Card.Img variant="top" src={cardImg} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div> */}
            <div class="col-md-1">

            </div>
        </div>    
    </div>
    ) 
}
function Review({name,review}){
    return <>              
                <div class="col-md-2 box_inline" >
                    <Card style={{ width: '18rem' }} className="box_margin">
                    <Card.Img variant="top" src={cardImg} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                        {review}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>   
                </div>
            </>

}
export default Testimonials;