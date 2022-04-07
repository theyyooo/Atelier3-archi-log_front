import React, { useState } from 'react';
import { Form, Header, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";

export const UserForm = (props) => {
    const [form, setForm] = useState({
        surname: "",
        name: "",
        pwd: "",
    });

    const handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [key]: value });
    };

    const handleSubmit = (data) => {
        console.log(form);
    }

    return (
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

    );

}