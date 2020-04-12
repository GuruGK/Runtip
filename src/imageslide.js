import React,{Component} from 'react';
import Yoga from './Images/Yoga.jpg';
import Covid from './Images/covid.jpg'
import fruits from './Images/fruits.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from './Images/Carousel1.jpg';
import Carousel2 from './Images/Carousel2.jpg';
import Carousel3 from './Images/Carousel3.jpg';


export default class Imageslide extends Component{
    constructor(props){
        super(props);
        this.state={
           Images:[Yoga, Covid, fruits] 
        };
    }
    showPopup=()=>{
        alert("Carousel clicked");
    }
    render(){
        return(
            <Carousel className="container" interval="3000" fade="true"onClick={this.showPopup} slide="false">
                <Carousel.Item style={{height:"300px"}}  >
                    <img src={Carousel1} alt="First slide" className="d block w-100"> 
                    </img>                
                </Carousel.Item>
                <Carousel.Item style={{height:"300px"}} >
                    <img src={Carousel2} alt="Second slide" className="d block w-100"> 
                    </img>                
                </Carousel.Item>
                <Carousel.Item style={{height:"300px"}} >
                    <img src={Carousel3} alt="First slide" className="d block w-100"> 
                    </img>
                </Carousel.Item>
            </Carousel>
        )
    }
}