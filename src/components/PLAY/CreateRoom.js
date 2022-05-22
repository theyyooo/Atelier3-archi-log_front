import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react'
import { Header } from '../TOOLS/HEADER/Header';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

export const CreateRoom = (props) => {
    const [form, setForm] = useState({
        name: "",
        bet: 0,
    });

    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleFormChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [key]: value });
    }

    const handleSubmit = (event) => {
        if (form.name && form.bet > 0) {
            navigate("/play/" + form.name);
        }
        setMessage("failed")

    }

    return (
        <Form size="tiny">
            <Header as='h4' title='Room Creation' dividing />
            {message === 'failed' &&
                <div class="ui negative message" style={{ textAlign: "center" }}>
                    <i class="close icon"></i>
                    <div class="header">We're sorry we can't create the room</div>
                    <p>Please verify your data</p>
                </div>
            }
            <div style={{ marginLeft: "25%", marginRight: "25%" }}>
                <Form.Field>
                    <Form.Input fluid type="text" label='Name' onChange={handleFormChange} placeholder='Name of the room' name="name" value={form.name} />
                </Form.Field>
                <Form.Field>
                    <Form.Input label="Bet" type="number" onChange={handleFormChange} placeholder="Bet" name="bet" value={form.bet} />
                </Form.Field>
                <Link to="/play"><Button>Cancel</Button></Link>
                <Button type='submit' onClick={handleSubmit}>Play</Button>
            </div>
        </Form>
    );
}