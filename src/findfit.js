import React,{Component} from 'react';
import NavComponent from './navbar';
import BmilCalculator from './bmicalculator';
import Card from 'react-bootstrap/Card';
import Plank from './Images/Planks.png';
import Pullup from './Images/Pullups.png';


export default class Findfit extends Component{
    render(){
        return(
            <div>
                <NavComponent></NavComponent>
                <div id="divTopbg" style={{backgroundColor:"#b0e0e6"}}>
                    <table>
                        <tbody>
                        <tr>                            
                            <td style={{width:"40%", textAlign:"left", paddingLeft:"100px"}} >
                            <div >
                            <p style={{color:"white"}}>There is a fact that BMI don't take  place for muscle builders, long distance runners, pregnant women, elderly or young children.</p>
                        <h1>CALCULATE YOUR BMI</h1>                        
                        </div>                    
                    </td>
                    <td>
                    <div id="divCalculator" >
                    <BmilCalculator></BmilCalculator> 
                    </div>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                </div>
                
                <div id="divHeading" style={{paddingLeft:"150px", paddingRight:"150px", marginBottom:"100px", marginTop:"5%",  marginBottom:"5%"}}>
                    <h3 style={{color:"#5F9EA0"}}>What if we told you practising one pose every day could improve your strength, physique, mood and more ?</h3>
                    <p style={{fontSize:"15px", marginTop:"20px", marginBottom:"40px"}}> That's right ! The Plank, Pullup, Pushup and Squats has tons of benefits.</p>
                </div>

                <div id="divContent" style={{background:"ghostwhite"}}>
                    <div className="form-inline" style={{paddingLeft:"100px", paddingRight:"100px"}}>
                    <div id="divPlank" style={{width:"50%", borderColor:"black", borderRadius:"8px"}}>
                        <img src={Plank} style={{width:"30%", height:"30%", margin:"40px"}}></img>
                        <h4 style={{color:"#5F9EA0", marginBottom:"10px"}}>PLANK</h4>
                        <p style={{paddingLeft:"20%", paddingRight:"20%", textAlign:"justify", fontSize:"14px"}}>Your hips will start sinking once your abs have reached their fatigue limit. That's a sign it's time to end your plank. If it seems your hips are sagging from the beginning, try separating your feet a bit wider and focus on engaging your abs</p>
                    </div>
                    <div id="divPullup" style={{width:"50%"}}>
                        <img src={Pullup}></img>
                        <p>Benefits of Pullups</p>
                    </div>
                    </div>
                    <div className="form-inline">
                    <div id="divPlank" style={{width:"50%"}}>
                        <img src={Plank}></img>
                        <p>Benefits of planks</p>
                    </div>
                    <div id="divPullup">
                        <img src={Pullup}></img>
                        <p>Benefits of Pullups</p>
                    </div>
                    </div>
                    </div>            
            </div>
        )
    }
}