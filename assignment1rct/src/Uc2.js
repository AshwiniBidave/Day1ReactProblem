import React from "react";
import "./App.css";
class Uc2 extends React.Component {
    constructor(){
        super()
        this.state={
            title:"Hello from Bridgelabzz"
        }
    }
    render() {
        return (<>
            <h1>{this.state.title}</h1>
        </>
        );
    }
}
export default Uc2;