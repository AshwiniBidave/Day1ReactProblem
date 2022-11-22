import React from "react";
import "./App.css";
import logo from "./assets/img/brigelabz.png"
class Uc7 extends React.Component {
    url = "https://www.bridgelabz.com/"
    constructor() {
        super()
        this.state = {
            username: "",
            nameError: "",
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
        if (!Regex.test(event.target.value)) {
            this.setState({ nameError: "incorrect name " })
        } else {
            this.setState({username: event.target.value, nameError: " " })
        }
    }
    render() {
        return (
            <>
                <div id="one">
                    <div>
                        <h1>Hello {this.state.username} from Bridgelabz</h1>
                        <img src={logo} onClick={this.onClick} alt="A Bridgelabz logo: a Bridge to Employee through lab work" />
                        <div className="input">
                            <input placeholder="Enter Your name" onChange={this.onNameChange} />
                            <span className="Error-Output">{this.state.nameError}</span>
                        </div>
                    </div>
                    <p>At Bridgelabz,we are  a community of,</p>
                    <ul>
                        <li>technologists</li>
                        <li>thikers</li>
                        <li>builders</li>
                    </ul>
                    <p>Working together to keep the Tech Employability of Engineers alive and accessbile,so Tech companies worldwide can get
                        contributors and creater for techonolgy solutions. we believe this act of human collabration across an employability platform is essential to individual growth and our collective future.</p>
                    <p>To know about us <a href="https://www.bridgelabz.com/"> bridgelabz</a> to learn even more about our mission
                        i.e.employability to all.
                    </p>
                </div>

            </>
        );
    }
}
export default Uc7;