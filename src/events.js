import React,{Component} from 'react';
import NavComponent from './navbar';

export default class Events extends Component{
    render(){
        return(
            <div>
                <NavComponent></NavComponent>
                <h2>No events to display at now. Please got to home page</h2>
            </div>
        )
    }
}