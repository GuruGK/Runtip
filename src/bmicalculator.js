import React, { Component } from 'react';
import { Button, TextInput } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './bmicalculator.css';

export default class BmilCalculator extends Component {
    constructor() {
        super();
        this.state = {
            weight: '',
            height: '',
            htstd: '', //this property for adding cm values in Standard mode
            bmiOutput: '',
            bmi: '',
            viewbmiOutput: 'hidden',
            viewbmi: 'hidden',
            viewstdht: 'hidden',
            viewmtrcht: 'visible',
            wtPlaceholder: 'Enter your Weight in KG',
            htPlaceholder: 'Enter your Height in cm',
            isMetric: true,
            btnMetricdisabled: true,
            btnStddisabled: false
        }
    }
    calculateBMI = (event) => {
        event.preventDefault();        
        console.log(this.state.isMetric);
        if (this.state.isMetric) {
            console.log("Metric calculation");
            var bmiValue = (this.state.weight) / (this.state.height * this.state.height * 0.0001);
        }
        else {
            var stdheight = (this.state.height * 30) + (this.state.htstd);
            console.log(stdheight, this.state.htstd);
            var bmiValue = (this.state.weight / 2.205) / (stdheight * stdheight * 0.0001);
        }

        this.setState({ bmiOutput: bmiValue.toFixed(2) });
        if (bmiValue < 18) {
            this.setState({ bmi: 'Lean' });
        }
        else if (bmiValue > 18 & bmiValue < 25) {
            this.setState({ bmi: 'Normal' });
        }
        else {
            this.setState({ bmi: 'Fat' });
        }
        this.setState({ viewbmiOutput: 'visible' });
        this.setState({ viewbmi: 'visible' });

    }
    clearInput = (event) => {
        event.preventDefault();
        this.setState({ bmiOutput: '' });
        this.setState({ bmi: '' });
        this.setState({ weight: '' });
        this.setState({ height: '' });
        this.setState({ viewbmiOutput: 'hidden' });
        this.setState({ viewbmi: 'hidden' });
    }

    enableStandard = () => {
        this.setState({ viewstdht: 'visible' });
        this.setState({ viewmtrcht: 'hidden' });
        this.setState({ weightUnit: "Pounds" });
        this.setState({ isMetric: false });
        this.setState({ btnMetricdisabled: false });
        this.setState({ btnStddisabled: true });
        this.setState({ wtPlaceholder: "Enter your Weight in pound" });
        this.setState({ htPlaceholder: "Enter your Height in feet" });
    }

    enableMetric = () => {
        this.setState({ viewstdht: 'hidden' });
        this.setState({ viewmtrcht: 'visible' });
        this.setState({ weightUnit: "Kg" });
        this.setState({ isMetric: true });
        this.setState({ btnMetricdisabled: true });
        this.setState({ btnStddisabled: false });
        this.setState({ wtPlaceholder: 'Enter your Weight in KG' });
        this.setState({ htPlaceholder: 'Enter your Height in cms' });
    }

    render() {
        return (
            <div>
                <form className="form-inline" style={{ marginLeft: "15%", marginTop:"20%", marginBottom:"20%" }}>
                    <div id="divInputs" style={{width:"40%"}}>
                    <div id="divButtons" style={{ paddingTop: "10%", paddingBottom:"5%" }} className="form-inline">
                        <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.enableMetric} disabled={this.state.btnMetricdisabled} style={{ width: "30%", fontSize: "14px", backgroundColor: "#5F9EA0", borderRadius: "0px", border: "none", boxShadow: "none" }}>Metric</button>
                        <button className="btn btn-primary btn-lg" type="submit" onClick={this.enableStandard} disabled={this.state.btnStddisabled} style={{ width: "30%", fontSize: "14px", backgroundColor: "#5F9EA0", borderRadius: "0px", border: "none", boxShadow: "none" }}>Standard</button>
                    </div>                    
                        <div id="divIO" className="form-inline">
                        <div id="divInput" style={{borderRadius:"none"}}>
                        <div className="form form-group" style={{ marginBottom: "20px", position: "relative" }}>
                            <input className="form-control" type="text" value={this.state.weight} style={{ width: "65%", fontSize: "14px", border: "none", boxShadow: "none", borderRadius: "0px", border: "none" }} placeholder={this.state.wtPlaceholder}
                                onChange={(event) => {
                                    this.setState(
                                        { weight: event.target.value },
                                        function () {
                                            console.log(this.state.btnStddisabled)
                                        }
                                    )
                                }
                                }
                            ></input>
                        </div>
                        <div className="form form-inline" style={{ marginBottom: "20px", position: "relative" }}>
                            <input className="form-control" type="text" value={this.state.height} style={{ width: "65%", fontSize: "14px", border: "none", boxShadow: "none", marginRight: "10px", borderRadius: "0px", border: "none" }} placeholder={this.state.htPlaceholder} onChange={(event) => {
                                this.setState(
                                    { height: event.target.value },
                                    function () {
                                        console.log("BMI is " + this.state.viewbmiOutput + "," + "YOU ARE " + this.state.viewbmi);
                                    }
                                )
                            }
                            }></input>
                            <input className="form-control" value={this.state.htstd} placeholder="inch" style={{ visibility: this.state.viewstdht, width: "20%", fontSize: "14px", border: "none", boxShadow: "none", borderRadius: "0px", border: "none" }} onChange={(event) => {
                                this.setState(
                                    { htstd: event.target.value },
                                    function () {
                                        console.log("Height in cms" + this.state.htstd)
                                    }
                                )
                            }
                            } ></input>
                        </div>
                        <div className="form-inline" style={{ marginBottom: "20px", position: "relative"}}>
                            <button className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#5F9EA0", width: "30%", marginRight: "10px", boxShadow: "none", borderRadius: "0px", border: "none", fontSize:"14px" }} type="submit" variant='secondary' onClick={this.calculateBMI}>Submit</button>
                            <button className="btn btn-primary btn-lg" style={{backgroundColor: "#5F9EA0", width: "25%", boxShadow: "none", borderRadius: "0px", border: "none",fontSize:"14px" }} type="submit" onClick={this.clearInput}>Clear</button>
                        </div>
                        </div>                        
                        </div>
                        </div>
                        <div id="divOutput">
                        <div id="divOutput">
                        <h2 style={{ color:"white", fontSize:"62px" }}>{this.state.bmiOutput}</h2>
                        <label style={{ color:"white" }}>{this.state.bmi}</label>
                        </div>
                        </div>
                    </form> 
            </div>
        )
    }
}
//visibility: this.state.viewbmiOutput
//visibility: this.state.viewbmi