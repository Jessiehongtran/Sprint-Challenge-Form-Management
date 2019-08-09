import React from 'react';
import {Form, Formik, Field, withFormik} from 'formik'
import * as Yup from "yup";


class UserForm extends React.Component {
    constructor (props){
        super(props);
        console.log('props in UserForm', props)
        this.state = {
            name: "Hong",
            // user: []
        }
    }



    render(){
        console.log('props in render', this.props)
        return (
            <div>
                <h1>Form created by {this.state.name}</h1>
                <Form>
                    <Field type="text" name="name" placeholder="Username" />
                    {this.props.touched.name && this.props.errors.name && <p>{this.props.errors.name}</p>}
                    
                    <Field type="text" name="password" placeholder="Password"/>
                    {this.props.touched.password && this.props.errors.password && <p>{this.props.errors.password}</p>}
                </Form>
                <button>Submit!</button>
            </div>
        )
    }
}

const UserFormik = withFormik({
    mapPropsToValues(values){
        return {
            name: values.name || '',
            password: values.password || '',
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        password: Yup.string().min(8).required('Password is required')
    })
    


})(UserForm)

 

export default UserFormik;