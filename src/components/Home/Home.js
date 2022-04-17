import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { Container, Navbar, Nav, Link, Form, Button, FormControl, Row, Col, Card  } from 'react-bootstrap';
import logo from '../../media/logo.png'
import load from '../../media/load.gif'
import aws from '../../media/aws.png'
import Dell from '../../media/Dell.png'
import google from '../../media/google.png'
import Honeywell from '../../media/Honeywell.png'
import Zebra from '../../media/Zebra.png'
import web from '../../media/web.png'
import cloud from '../../media/cloud.png'
import app from '../../media/app.png'
import network from '../../media/network.png'
import hrm from '../../media/hrm.png'
import smart from '../../media/smart.png'
import cms from '../../media/cms.png'
import digital from '../../media/digital.png'
import hitech from '../../media/hitech.png'
import security from '../../media/security.png'
import sales from '../../media/sales.png'
import managed from '../../media/managed.png'
import prof from '../../media/prof.gif'
import contact from '../../media/contact.gif'


const Home = () => {
    function changeBackground(e) {
        e.target.style.color = "#CB1D63"
      }
      function change(e){
          e.target.style.color = "black"
      }

      const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
       const queryData = {
           name: data.name,
           email: data.email,
           query: data.query
       }

       fetch('https://care-box-tech.herokuapp.com/postData', {
           method: 'POST',
           headers: {'content-type': "application/json"},
           body: JSON.stringify(queryData)
       })
       .then(res => res.json())
       .then(data => console.log(data))
       document.getElementById("throw").style.display = "none";
       document.getElementById("dekho").style.display = "block";




  }

  



    return (
        <div>
  <Navbar collapseOnSelect navbar-fixed-top expand="lg" >
  <Container>
  <Navbar.Brand href="/"><img src={logo} style={{height:"90px", width:"180px"}}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" style={{ padding: "40px"}}>
    <Nav.Link href="/home" style={{color: "black", fontFamily: "Poppins", fontWeight: "400"}} onMouseOver={changeBackground} onMouseLeave={change}>Home</Nav.Link>
      <Nav.Link href="/aboutus" style={{color: "black", fontFamily: "Poppins", fontWeight: "400"}} onMouseOver={changeBackground} onMouseLeave={change}>About Us</Nav.Link>
      <Nav.Link href="/contactus" style={{color: "black", fontFamily: "Poppins", fontWeight: "400"}} onMouseOver={changeBackground} onMouseLeave={change}>Contact Us</Nav.Link>
    </Nav>
    <Button type="submit" style={{color: "white", fontFamily: "Poppins", backgroundColor: "#CB1D63", border: "2px solid #CB1D63"}}><a href="tel:+8801568279503" style={{color: "white", fontFamily: "Poppins", backgroundColor: "#CB1D63", border: "2px solid #CB1D63"}}>CLICK TO CALL</a></Button>
  </Navbar.Collapse>
  </Container>    
</Navbar>
<br></br>



<Container >
<Row className="justify-content-md-center align-items-center" >

<Col sm >
<h4 style={{color: "black", fontFamily: "Poppins",  textAlign: "left"}}>We believe in <span style={{color: "#CB1D63", fontFamily: "Poppins"}}>100% </span>optimized <br></br>solutions for long-term sustainability.</h4>
<h6 style={{color: "black", fontFamily: "Poppins",  textAlign: "left"}}><span >-</span> <span>S. Nicholas</span></h6>
</Col>
<Col sm>
    <img src={load} style={{width: "90%", height: "55%"}}></img>
    </Col>
    
  </Row>
</Container>
<br></br>




<div style={{backgroundColor: "#F4EDE4", paddingTop: "10px"}}>
<br></br>
<Container>
<h3 style={{color: "black", fontFamily: "Poppins"}}>Our Core Services</h3>
</Container>
<Container>
 
<Row className="justify-content-md-center align-items-center">
<Col sm>
<img src={web} style={{width: "50%", height: "40%"}}></img>
<h6>Complete E-Commerce (Both Web & App) Solution with ERP based Backend for large scale operations.</h6>
</Col>
<Col sm>
<img src={app} style={{width: "50%", height: "40%"}}></img>
<h6>Complete E-Commerce (Both Web & App) Solution with ERP based Backend for large scale operations.</h6>
</Col>
<Col sm>
<img src={cloud} style={{width: "50%", height: "40%"}}></img>
<h6>Cloud Server Integration and Setup. (AWS, Google Cloud, Azure)</h6>
</Col>
  </Row>
  <br></br>

  <Row className="justify-content-md-center align-items-center">
<Col sm>
<img src={network} style={{width: "50%", height: "40%"}}></img>
<h6>Network Infrastructure Design and Setup.</h6>
</Col>
<Col sm>
<img src={hrm} style={{width: "50%", height: "40%"}}></img>
<h6>HRM Software Development and Support.</h6>
</Col>
<Col sm>
<img src={smart} style={{width: "50%", height: "40%"}}></img>
<h6>Smart System & Solution Integration and Support</h6>
</Col>
  </Row>
  <br></br>


  <Row className="justify-content-md-center align-items-center">
<Col sm>
<img src={cms} style={{width: "50%", height: "40%"}}></img>
<h6>CMS Site Development and Maintenance Support. (WordPress, Shopify, Wix)</h6>
</Col>
<Col sm>
<img src={hitech} style={{width: "50%", height: "40%"}}></img>
<h6>Hi-Tech Hardware Setup with Scalable Solutions and Support</h6>
</Col>
<Col sm>
<img src={digital} style={{width: "50%", height: "40%"}}></img>
<h6>360 Degree Digital Marketing and Brand Development Solutions</h6>
</Col>
  </Row>
  <br></br>


  <Row className="justify-content-md-center align-items-center">
<Col sm>
<img src={security} style={{width: "50%", height: "40%"}}></img>
<h6>Network and Computer Security Solutions.</h6>
</Col>
<Col sm>
<img src={sales} style={{width: "50%", height: "40%"}}></img>
<h6>After Sales IT Support.</h6>
</Col>
<Col sm>
<img src={managed} style={{width: "50%", height: "40%"}}></img>
<h6>Managed IT support and service.</h6>
</Col>
  </Row>
  <br></br>

</Container>
</div>
<br></br>










<Container>
<h4 style={{color: "black", fontFamily: "Poppins"}}>Some of Our OEM Connections</h4>
</Container>
<br></br>

<Container >

<Row className="justify-content-md-center align-items-center" >
   <Col sm ><img src={aws} style={{width: "50%", height: "60%"}}></img></Col>
   <Col sm><img src={Dell} style={{width: "50%", height: "60%"}}></img></Col>
   <Col sm ><img src={google} style={{width: "50%", height: "60%"}}></img></Col>
   <Col sm><img src={Honeywell} style={{width: "50%", height: "60%"}}></img></Col>
   <Col sm ><img src={Zebra} style={{width: "50%", height: "60%"}}></img></Col>
  </Row>
</Container>
<br></br>








<Container>
<Row className="justify-content-md-center align-items-center">
    <Col sm style={{ textAlign: "left" }}>
        <h4 style={{color: "black", fontFamily: "Poppins", textAlign: "left"}}>Why Us</h4>
        <br></br>
        <p style={{color: "black", fontFamily: "Poppins"}}>
<span style={{color: "black", fontFamily: "Poppins", fontWeight: "600", textAlign: "left"}}>Capable Team </span><br></br>
Care-Box Tech team has professionals having completed their degrees from well-reputed universities around the world. Moreover, we are industrious and determined to match the client's requirements. Our motto is the customer is always right. <br></br><br></br>

<span style={{color: "black", fontFamily: "Poppins", fontWeight: "600", textAlign: "left"}}>A broad range of support </span><br></br>
Our areas of expertise range from a plethora of IT support and Business support all the way to secure communication design. Some of our clients are shown in the latter stages of the website.<br></br><br></br>

<span style={{color: "black", fontFamily: "Poppins", fontWeight: "600", textAlign: "left"}}>TOP-NOTCH ICT CONSULTANCY</span><br></br>
Consultation is provided for high-end technology implementation. Moreover, existing facilities are also upgraded and maintained. <br></br><br></br>

We provide the following consultancy services: strategy planning, assessment, procurement, re-engineering solutions, planning, audits, and much more.
</p>
    </Col>
    <Col sm><img src={prof} style={{width: "90%", height: "55%"}}></img></Col>
  </Row>

</Container>


<Container>
<h4 style={{color: "black", fontFamily: "Poppins"}}>Contact Us</h4>
</Container>

<Container >
<Row className="justify-content-md-center align-items-center">
<Col sm><img src={contact} style={{width: "90%", height: "55%"}}></img></Col>
    <Col sm>
     
    {/* {/* <Form onSubmit={handleSubmit(onSubmit)} id="throw">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control required style={{width: "200px"}} placeholder="Your Name"  {...register("name")} /><br></br>
      <Form.Control required style={{width: "200px"}} placeholder="Your Email" {...register("email")} /><br></br>
      <Form.Control required style={{width: "200px", cols: "40", rows: "5"}}   {...register("query")} /><br></br> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
    


    <Form onSubmit={handleSubmit(onSubmit)} id="throw">
  <Form.Group className="mb-3" controlId="validationCustom01">
    <Form.Control type="text" required placeholder="Enter Name" {...register("name")}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" required placeholder="Enter Email" {...register("email")} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasic">
    <Form.Control type="text" required  style={{ cols: "40", rows: "5"}} placeholder="Enter Query" {...register("query")}/>
  </Form.Group>
  <Button style={{backgroundColor: "#CB1D63", color: "white", fontFamily: "Poppins", border: "none", padding: "10px", }} type="submit">
    Submit
  </Button>
</Form>

    <h5 style={{ fontFamily: "Poppins", display: "none"}} id="dekho">
      Thanks For Your Query, <br></br> We will get back to you soon.
    </h5>
     
    </Col>
    
</Row>
</Container>
<br></br>
<br></br>
<br></br>

<div style={{backgroundColor: "#CB1D63"}}>
<Container>
    <Row className="justify-content-md-center align-items-center">
        <Col sm style={{padding: "10px", color: "white", fontFamily: "Poppins", border: "none"}}>
            <h6>All Rights Reserved by @ Care-Box Tech. Solutions.</h6>
        </Col>
    </Row>
</Container>
</div>
        </div>
    );
};

export default Home;
