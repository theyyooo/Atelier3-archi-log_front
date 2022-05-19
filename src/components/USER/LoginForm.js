import React, { useState } from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from "react-redux";
import { Header as Head } from '../TOOLS/HEADER/Header';
import { updateUser } from '../../actions';
import { useNavigate } from 'react-router';
import axios from 'axios';

export const LoginForm = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setLoginForm] = useState({
        surname: "",
        pwd: "",
    });

    const data = {
        "surname": form.surname,
        "pwd": form.pwd
    };

    let callbackUserLogin = (user) => {
        dispatch(updateUser(user.data))
        localStorage.setItem('user', user.data.surname);
        navigate("/")
    }
            

    const handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setLoginForm({ ...form, [key]: value });
    };

    const handleSubmit = () => {

        axios.post('http://localhost:8080/login', data)
            .then(data => callbackUserLogin(data))
            .catch(error => console.log('error', error));

    }

    return (
        <>
            <Head title={"Login"} />
            <div style={{ marginLeft: "25%", marginRight: "25%" }}>
                <Form>
                    <Header as='h4' dividing>
                        User login
                    </Header>
                    <Form.Field>
                        <Form.Input fluid label='Surname' placeholder='Surname' name="surname" onChange={handleChange} value={form.surname} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input type="password" label="Pwd" placeholder="" onChange={handleChange} name="pwd" value={form.pwd} />
                    </Form.Field>
                    <Button type='submit' onClick={handleSubmit}>Submit</Button>
                </Form>
            </div>
        </>
    );

}