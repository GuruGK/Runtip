import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
//import {Card} from 'react-bootstrap/Card';
import Logo from './Images/Logo.png';

export default class Login extends Component {
  render() {
    return (
      <div id="bckGround" style={{ background: "#5F9EA0" }}>
        <div id="wrap" style={{ marginRight: "90px", marginLeft: "90px" }} >
          <div style={{ paddingTop: "80px" }}>
            <Image src={Logo} style={{ weight: "100px", height: "100px" , marginBottom:"40px"}}></Image>
          </div>
          <div style={{ height: "430px", width: "1140px" }}>
            <div id="panel" style={{ maxWidth: "430px", borderRadius: "8px", backgroundColor: "white", marginLeft: "355px", marginRight: "355px", border: "1px solid transparent" }}>
              <h3 style={{marginTop:"40px", color:"#5F9EA0"}}>Log in to your account</h3>
              <form style={{padding:"40px"}}>
                <input type="hidden"></input>
                <div className="form form-group" style={{marginBottom:"20px", position:"relative"}}>                  
                  <input className="form-control" id="Email" placeholder="Email address"></input>                
                  </div>
                <div className="form form-group" style={{marginBottom:"20px", position:"relative"}}>                  
                  <input className="form-control" id="password" placeholder="Password"></input>
                </div>
                <button className="btn btn-primary btn-lg btn-block" type="submit" style={{backgroundColor:"#5F9EA0", borderRadius:"5px", width:"100%", fontSize:"18px", border:"none"}}>Log In</button>
              </form>
              <a href="/home" className="panel-footer" style={{textDecoration:"none",  padding:"20px", backgroundColor:"#b0e0e6", display:"block", borderTop:"1px solid #b0e0e6", color:"#5F9EA0", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px"}}>Log in later.
                <span style={{textDecoration:"underline", paddingLeft:"10px"}}>Go to home</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}