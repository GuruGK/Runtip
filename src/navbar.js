import React,{Component} from 'react';
import {Navbar, Form, Button, FormControl, NavDropdown, Nav} from 'react-bootstrap';
import history from './history';

export default class NavComponent extends Component{

  gotoLogin=()=>{
    alert('Login button clicked');
  }
  historyPush=()=>{
    history.push('/Login');
  }

    render(){
        return(
            <Navbar expand="lg" style={{backgroundColor:"white"}}>
  <Navbar.Brand onClick={()=>history.push('/Home')} style={{color:"#5F9EA0", paddingLeft:"50px", font:"bold"}} >RUN TIP</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" style={{color:"#5F9EA0", paddingLeft:"50px"}}>
      <Nav.Link href="/articles" onClick={this.gotoArticles=()=>{history.push('/articles')}} style={{color:"#5F9EA0", paddingRight:"30px"}}>Articles</Nav.Link>
      <Nav.Link href="/findfit" style={{color:"#5F9EA0",  paddingRight:"30px"}}>Find fit</Nav.Link>
      <Nav.Link href="/events" style={{color:"#5F9EA0"}}>Events</Nav.Link>
    </Nav>
    <Form inline>
      <button type="submit" onClick={this.historyPush} style={{borderRadius:"5px", backgroundColor:"white",color:"#5F9EA0", border:"1px solid white", fontSize:"14px", paddingTop:"6px", paddingBottom:"6px", paddingLeft:"12px", paddingRight:"12px" }}>Log In</button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        );
    }
}
