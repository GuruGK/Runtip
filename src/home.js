import React, { Component } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Yoga from './Images/Yoga.jpg';
import covid from './Images/covid.jpg'
import fruits from './Images/fruits.jpg';
import NavComponent from './navbar';
import Text from './text';
import Imageslide from './imageslide';
import Bmicalculator from './bmicalculator';
import logotraining from './Images/logoTraining.png';
import logorunning from './Images/logoRunning.png';
import training from './Images/training.png';
import kipbek from './Images/NN.png';
//import {Button} from 'bootstrap';
import './fonts/TCM.TTF';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      alertMessage: 'entered',
      showModals: false
    };
    this.mydivtoFocus = React.createRef();
    //this.showAlert=this.showAlert.bind(this);  
    console.log(this.state.showModals);
  }
  showModal = () => {
    this.setState({ showModals: true });
    console.log(this.state.showModals);
    //alert(this.state.alertMessage);
  };
  handleClick = (event) => {
    if (this.mydivtoFocus.current) {
      this.mydivtoFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }
  }
  render() {
    return (
      <div>
        <NavComponent></NavComponent>
        {/* <div id="imgSlide" style={{paddingTop:"50px", paddingBottom:"50px"}}>       
        <Imageslide></Imageslide>
        </div>  */}
        <div id="title description" style={{ backgroundColor: "#b0e0e6", marginBottom:"100px",}}>
          <div id="divTable" style={{paddingLeft:"100px", paddingRight:"100px"}}>
          <table>
            <tr>
              <td>
                <div style={{ width: "70%", paddingTop: "100px", paddingBottom: "100px", textAlign: "left", paddingLeft:"20px"}}>
                  <div id="title" style={{ paddingBottom: "20px" }}>
                    <h2 className="fonts">ALL YOU NEED TO STAY STRONG</h2>
                  </div>
                  <div id="description" style={{ color: "white" }}>
                    <p>It’s important to stay motivated during this tough time. Join the Premium team now with a 90-DAY FREE MEMBERSHIP and access to all workouts and training plans in the adidas training app!</p>
                  </div>
                </div>
              </td>
              <td style={{width:"50%"}}>
                <img src={kipbek}></img>
              </td>

            </tr>
          </table>
          </div>
        </div>

        <div id="welcome" style={{ paddingBottom: "50px", paddingTop: "30px" }}>
          <h1 style={{color: "#5F9EA0", fontFamily:"MyFont"}}>Welcome to RUNTIP</h1>
          <h6 style={{ color: "grey" }}>Created by runners. Created for runners.</h6>
        </div>

        <div id="divTraining" style={{ paddingLeft: "100px", paddingRight: "100px", marginBottom: "100px" }}>
          <table>
            <tr>
              <td style={{ width: "40%", textAlign: "left" }}>
                {/* <div id="divlogoTraining" style={{width:"40%", textAlign:"left", margin:"0px"}}></div>             */}
                <img src={logotraining} style={{ width: "220px", display: "block", paddingBottom: "10px" }}></img>
                <h3 style={{ paddingBottom: "5px", color: "#5F9EA0" }}>WORK OUT. BUILD STRENGTH. GET IN SHAPE.</h3>
                <p style={{ fontSize: "14px", color: "#b0e0e6" }}>Select muscle groups and create your own workout that fits your schedule. Join challenges: compare your activity to others and push yourself in new ways. Workout anywhere, any time.
Start today! Shape your body with workout plans for every level in adidas Training by Runtastic</p>

              </td>
              <td>
                <div id="divFloatImage">
                  <img src={training} style={{ float: "right", width: "400px" }}></img>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div id="divTraining" style={{ paddingLeft: "100px", paddingRight: "100px", marginBottom: "100px" }}>
          <table>
            <tr>
              <td style={{ width: "60%" }}>
                <div id="divFloatImage">
                  <img src={training} style={{ float: "left", width: "400px" }}></img>
                </div>
              </td>
              <td style={{ width: "40%", textAlign: "right" }}>
                {/* <div id="divlogoTraining" style={{width:"40%", textAlign:"left", margin:"0px"}}></div>             */}
                <img src={logorunning} style={{ width: "50%", display: "block", paddingBottom: "10px", marginLeft: "50%" }}></img>
                <h3 style={{ paddingBottom: "5px", color: "#5F9EA0" }}>TRACK ACTIVITIES. BOOST PERFORMANCE. CELEBRATE SUCCESS.</h3>
                <p style={{ fontSize: "14px", color: "#b0e0e6" }}>Record your workouts and review your statistics. Join challenges to get motivated – push your limits. Share your success with a global community and reach your goals with every step.
Are you ready? Download adidas Running by Runtastic and get active with us</p>
              </td>
            </tr>
          </table>
        </div>
        {/* <div style={{ fontSize: "14px", paddingLeft: "40px", paddingRight: "40px" }}>
          <Text></Text>
        </div> */}
        <div style={{ background: "#5F9EA0", height: "120px" }}>
          <div style={{color:"#b0e0e6", paddingTop:"30px", height:"40px"}} >
          <p >Thank you for visiting RUNTIP</p>
          <p >runtip@2020</p>  
          </div>        
        </div>
        <div className='container' width='50%'>
          <Modal show={this.state.showModals} backdrop='static'>
            <Modal.Dialog >
              <Modal.Header>
                <Modal.Title>
                  Welcome Home
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Some text goes here</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary'>Close</Button>
                <Button variant='primary'>Save</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal>
        </div>
      </div>
    )
  }
}