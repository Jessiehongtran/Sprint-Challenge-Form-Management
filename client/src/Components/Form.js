import React from 'react';
import Axios from 'axios';
import {Form, Field, withFormik} from 'formik'
import * as Yup from "yup";
import UserProfile from './UserProfile'


class UserForm extends React.Component {
    constructor (props){
        super(props);
        console.log('props in UserForm', props)
        this.state = {
            title: "Hong",
            users: []
        }

    

    const getUser = () => {
        Axios
        .get(`http://localhost:5000/api/restricted/data`)
        .then(
            res => console.log('get', res)
        )
        .catch(
            err => console.log(err)
        )
    }
}

    

    // componentDidMount(a){
    //     if (this.props.status) {
    //         this.setState([...users, this.props.status]);
    //       }
    //     }
    // }




    render(){
        console.log('props in render', this.props);
        return (
            <div>
                <h1>Form created by {this.state.title}</h1>
                <Form>
                    <Field type="text" name="username" placeholder="Username" />
                    {this.props.touched.username && this.props.errors.username && <p>{this.props.errors.username}</p>}
                    
                    <Field type="text" name="password" placeholder="Password"/>
                    {this.props.touched.password && this.props.errors.password && <p>{this.props.errors.password}</p>}

                    <button>Submit!</button>
                </Form>
                {console.log('users',this.state.users)}
                {this.state.users.map(user => <UserProfile data={user}/> )}
            </div>
        )
    }
}

const UserFormik = withFormik({
    mapPropsToValues(values){
        return {
            username: values.username || '',
            password: values.password || '',
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Name is required'),
        password: Yup.string().min(8).required('Password is required')
    }),

    handleSubmit(values) {
        console.log('submit', values)
        Axios
        .post(`http://localhost:5000/api/register`, values)
        .then(
            res => 
            console.log('res in axios', res.config.data)
            
        )
        .catch(
            err => console.log(err)
        )
    }
    


})(UserForm)

 

export default UserFormik;