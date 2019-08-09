import React from 'react';
import {Form, Field, withFormik} from 'formik'
import * as Yup from "yup";


class UserForm extends React.Component {
    constructor (){
        super();
        this.state = {
            name: "Hong",
            user: []
        }
    }



    render(){
        return (
            <div>
                <h1>Form created by {this.state.name}</h1>
                <Form>
                    <Field type="text" name="name" placeholder="Username" />
                    <Field type="text" name="password" placeholder="Password"/>
                </Form>
                <button>Submit!</button>
            </div>
        )
    }
}

 

export default UserForm;