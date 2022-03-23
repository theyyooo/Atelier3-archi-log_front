import React, { useState } from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from "react-redux";

export const LoginForm = (props) => {
    const [form, setLoginForm] = useState({
        surname: "",
        pwd: "",
    });

    const handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setLoginForm({ ...form, [key]: value });
    };

    const handleSubmit = () => {
        console.log(form);
    }

    return (
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

    );

}