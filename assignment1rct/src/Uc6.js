import React from "react";
import "./App.css";
import logo from "./assets/img/brigelabz.png"
class Uc6 extends React.Component {
    url = "https://www.bridgelabz.com/"
    constructor() {
        super()
        this.state = {
            username: "",
            nameError: ""
        }
    }
    //onclick function
    onClick = ($event) => {
        console.log("Save button is clicked!", $event);
        window.open(this.url, "_blank")
    }
    onNameChange = (event) => {
        console.log("value is", event.target.value);
        const Regex = RegExp("^[A-Z]{1}[a-zA-z\\s]{2,}$");
        this.setState({ username: event.target.value })
        if (Regex.test(event.target.value)) {
            this.setState({ nameError: 'Min 3 Char required'})
        } else {
            this.setState({nameError: '' })
        }
    }
    render() {
        return (
            <>
                
                    <div>
                        <h1>Hello {this.state.username} from Bridgelabz</h1>
                        <img src={logo} onClick={this.onClick} alt="A Bridgelabz logo: a Bridge to Employee through lab work" />
                    
                    <div  className="input">
                        <input onChange={this.onNameChange} />
                        <span className="Error-Output">{this.state.nameError}</span>
                    </div>
                </div>
            </>
        );
    }
}
export default Uc6;