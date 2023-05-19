import React from "react";

class Welcome extends React.Component{
    name = ""
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return <h1 onClick={() => {
            this.name = "Thiago";
        }}>Welcome {this.name}</h1>
    }
}

export default Welcome;