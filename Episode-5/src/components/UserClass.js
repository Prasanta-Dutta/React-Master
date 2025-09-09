import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Hello {this.props.name} 🖐</h1>
                <h2>Nice to see you here 😊</h2>
                <h3>This is your page 👩‍💻</h3>
            </div>
        )
    }
};

export default UserClass;