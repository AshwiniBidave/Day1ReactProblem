import React from "react";
import "./App.css";
import logo from "./assets/img/brigelabz.png"
class Uc4 extends React.Component {
    url="https://www.bridgelabz.com/"
    constructor(){
        super()
        this.state={
            title:"Hello from Bridgelabzz"
        }
    }
    //onclick function
    onClick=($event)=>{
        console.log("Save button is clicked!",$event);
        window.open(this.url,"_blank")
    }
    render() {
        return (<>
            <h1>{this.state.title}</h1>
            <img src={logo} onClick={this.onClick}
            alt="A Bridgelabz logo: a Bridge to Employee through lab work"/>
        </>
        );
    }
}
export default Uc4;