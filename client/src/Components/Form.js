import React from 'react';
import Axios from 'axios';
import {Form, Field, withFormik} from 'formik'
import * as Yup from "yup";


class UserForm extends React.Component {
    constructor (props){
        super(props);
        console.log('props in UserForm', props)
        this.state = {
            name: "Hong",
            users: []
        }
    }

    componentDidMount(){
        this.fetchUser()
    }

    fetchUser = () => {
        Axios
        .post(`http://localhost:5000/api/register`, {
            name: "Your name",
            password: "password"
        })
        .then(
            res => console.log('response in axios', res)
        )
        .catch(
            err => console.log(err)
        )
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

                    <button>Submit!</button>
                </Form>
                
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