import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';

export const CreateRoom = (props) => {
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
        <Form size="tiny">
            <Header as='h4' title='Room Creation' dividing />
            <div style={{ marginLeft: "25%", marginRight: "25%" }}>
                <Form.Field>
                    <Form.Input fluid type="text" label='Name' onChange={handleFormChange} placeholder='Name of the room' name="name" value={form.name} />
                </Form.Field>
                <Form.Field>
                    <Form.Input label="Bet" type="number" onChange={handleFormChange} placeholder="Bet" name="bet" value={form.bet} />
                </Form.Field>
                <Button type='submit' onClick={handleSubmit}>Submit</Button>
            </div>
        </Form>
    );
}