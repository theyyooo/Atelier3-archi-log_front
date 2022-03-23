import React, { useState } from 'react';
import { Form, Header, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";

export const RoomForm = (props) => {
    const [form, setForm] = useState({
        name: "",
        bet: 0,
    });

    const handleFormChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [key]: value });
    }

    const handleSubmit = (event) => {
        console.log(form);
    }

    return (
        <Form>
            <Header as='h4' dividing>
                Room Creation
            </Header>
            <Form.Field>
                <Form.Input fluid type="text" label='Name' onChange={handleFormChange} placeholder='Name of the room' name="name" value={form.name} />
            </Form.Field>
            <Form.Field>
                <Form.Input label="Bet" type="number" onChange={handleFormChange} placeholder="Bet" name="bet" value={form.bet} />
            </Form.Field>
            <Button type='submit' onClick={handleSubmit}>Submit</Button>
        </Form>

    );

}