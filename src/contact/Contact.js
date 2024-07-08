import React from "react";
import '../styles/contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { HouseDoor} from 'react-bootstrap-icons';
function Contact()
{
    return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <center><h2 className="mt-5 mb-5">Contact Us</h2></center>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        
                    </div>
                    <div className="col-md-7">
                        <div className="container-fluid contact_box">
                            <div class="row">    
                                <div className="col-md-12">
                                    <Form>
                                        <Form.Group className="mb-5 input_font" controlId="nam">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="text"  className="textarea_color" placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-5 input_font" controlId="mail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" className="textarea_color" placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-5 input_font" controlId="query">
                                            <Form.Label>Query</Form.Label>
                                            <Form.Control as="textarea" rows={5} className="textarea_color" />
                                        </Form.Group>
                                        <div className="btn1">
                                         <Button variant="warning" size="lg">Warning</Button>
                                         </div>
                                    </Form>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className="col-md-3">
                            <center>
                                <HouseDoor size={80}/><br/><br />
                                <span className="address">634 A-51<br/>Jagdeeshwaram Vihar,<br/>Takrohi,Lucknow,<br/>226016</span>
                            </center>   
                    </div>
                    <div className="col-md-1">
                        
                    </div>
                </div>
            </div> 
        )
}
export default Contact;