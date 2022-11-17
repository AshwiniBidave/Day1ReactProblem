import React from "react";
import "./App.css";
import logo from "./assets/img/brigelabz.png"
class Uc5 extends React.Component {
    url = "https://www.bridgelabz.com/"
    constructor() {
        super()
        this.state = {
            username: ""
        }
    }
    //onclick function
    onClick = ($event) => {
        console.log("Save button is clicked!", $event);
        window.open(this.url, "_blank")
    }
    onNameChange = ($event) => {
        console.log("value is", $event.target.value);
        this.setState({ username: $event.target.value })
    }
    render() {
        return (
            <>
                <h1>Hello {this.state.username} from Bridgelabz</h1>
                <img src={logo} onClick={this.onClick} alt="A Bridgelabz logo: a Bridge to Employee through lab work" />

                <div>
                    <input onChange={this.onNameChange} />
                </div>
            </>
        );
    }
}
export default Uc5;