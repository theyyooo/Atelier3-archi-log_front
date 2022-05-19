import React, { useState } from 'react';
import { Form, Header, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { Header as Head } from '../TOOLS/HEADER/Header';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { updateUser } from '../../actions';

export const UserForm = (props) => {
    const [form, setForm] = useState({
        surname: "",
        name: "",
        pwd: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [key]: value });
    };

    const data = {
        "surname": form.surname,
        "name": form.name,
        "pwd": form.pwd
    };

    let callbackUserLogin = (user) => {
        dispatch(updateUser(user.data))
        localStorage.setItem('user', user.data.surname);
        navigate("/");
    }

    const handleSubmit = () => {
        axios.post('http://localhost:8080/register', data)
            .then(data => callbackUserLogin(data))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <Head title={"Register"} />
            <div style={{ marginLeft: "25%", marginRight: "25%" }}>
                <Form>
                    <Header as='h4' dividing>
                        User Registration
                    </Header>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Surname' placeholder='Surname' name="surname" onChange={handleChange} value={form.surname} />
                        <Form.Input fluid label='Name' placeholder='Name' name="name" onChange={handleChange} value={form.name} />
                    </Form.Group>
                    <Form.Field>
                        <Form.Input type="password" label="Pwd" placeholder="" onChange={handleChange} name="pwd" value={form.pwd} />
                    </Form.Field>
                    <Button type='submit' onClick={handleSubmit}>Submit</Button>
                </Form>
            </div >
        </>

    );

}