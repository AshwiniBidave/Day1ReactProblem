import React from "react";
import "./App.css";
import logo from "./assets/img/brigelabz.png"
class Uc3 extends React.Component {
    constructor(){
        super()
        this.state={
            title:"Hello from Bridgelabzz"
        }
    }
    render() {
        return (<>
            <h1>{this.state.title}</h1>
            <img src={logo} 
            alt="A Bridgelabz logo: a Bridge to Employee through lab work"/>
        </>
        );
    }
}
export default Uc3;