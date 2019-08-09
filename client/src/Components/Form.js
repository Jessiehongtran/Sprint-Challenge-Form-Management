import React from 'react';


class UserForm extends React.Component {
    constructor (){
        super();
        this.state = {
            name: "Hong"
        }
    }



    render(){
        return (
            <div>
                <h1>Form created by {this.state.name}</h1>
            </div>
        )
    }
}

export default UserForm;