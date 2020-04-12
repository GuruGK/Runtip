import React, {Component} from 'react';
import NavComponent from './navbar';
import { Button } from 'react-bootstrap';
import {Form, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
//import history from 'history';

export default class Signup extends Component{
constructor(props){
  super(props);
  this.state={
    firstname:'',
    lastname:'',
    phone:'',
    email:'',
    password:'',
    btnenbale:true
  }
}

    showAlert=()=>{
        alert('Thanks for registering');
        this.history.push('/home');
    }
    handleChange=(event)=>{
const name = event.target.name;
const value = event.target.value;
this.setState({[name]:value},
  function(){console.log('Value is '+ value,'firstname is ' + this.state.firstname);
  if((this.state.firstname.length>0) & (this.state.lastname.length>0) & (this.state.email.length>0) & (this.state.password.length>0)){
    this.setState({btnenbale:false});
  }
  else{
    this.setState({btnenbale:true});
  }});
 
    }

    render(){
        return( 
            <div>                         
<NavComponent>
</NavComponent>
<br></br>
<br></br>
<br></br>
<Form className='container' style={{width:"50%"}}>
<Form.Group as={Row} controlId="formBasicFirstName">
    <Form.Label column sm={3} style={{textalign:"left"}} >First Name</Form.Label>
    <Col sm={9}>
    <Form.Control type="text" placeholder="First name" name='firstname' autoComplete='off' onChange={(event)=>
      this.handleChange(event) 
      }/> 
    </Col>   
  </Form.Group>

  <Form.Group as={Row} controlId="formBasicLastName">
    <Form.Label column sm={3}>Last Name</Form.Label>
    <Col sm={9}>
    <Form.Control type="text" placeholder="Last name" name='lastname' autoComplete='off' onChange={(event)=>this.handleChange(event)} /> 
    </Col>   
  </Form.Group>

  <Form.Group as={Row} controlId="formBasicMobile">
    <Form.Label column sm={3}>Mobile</Form.Label>
    <Col sm={9}>
    <Form.Control type="number" placeholder="Mobile Number" /> 
    </Col>   
  </Form.Group>
  
  <Form.Group as={Row} controlId="formBasicEmail">
    <Form.Label column sm={3}>Email address</Form.Label>
    <Col sm={9}>
    <Form.Control type="email" placeholder="Enter email" name='email' autoComplete='off' onChange={(event)=>this.handleChange(event)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formBasicPassword">
    <Form.Label column sm={3}>Password</Form.Label>
    <Col sm={9}>
    <Form.Control type="password" placeholder="Password" name='password' onChange={(event)=>this.handleChange(event)}  />
    <Form.Text style={{color:"#6c757d"}} className="text-muted" >
      Password should contain characters in Caps, Small, Numeric, Special character and length of minimum 8
    </Form.Text>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remind me" />    
  </Form.Group>
  <Button variant="primary" type="submit" onClick={()=>{
    this.showAlert()
  }} disabled={this.state.btnenbale}>
    Submit
  </Button>
</Form>
</div>
        );
    }
}