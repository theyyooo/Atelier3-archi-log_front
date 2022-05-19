import React, { useState, useEffect } from 'react';
import { Grid, Button, GridColumn } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';
import { DisplayCard } from '../PLAY/DisplayCard';
import { TableContainer } from '../TOOLS/TableContainer';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { updateCurrentCard } from '../../actions';
import { updateUser } from '../../actions';

export const Sell = (props) => {
    const [form, setForm] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let current_user = useSelector(state => state.userReducer.user);
    let current_card = useSelector(state => state.cardSelectedReducer.card);

    useEffect(() => {
        if (!current_user.id) {
            navigate("/login");
        }
        axios.get('http://localhost:8080/cards/' + current_user.id + '/sell')
            .then(data => callbackAllCardToSell(data))
            .catch(error => console.log('error', error));
    }, []);

    const callbackAllCardToSell = (cards) => {
        setForm(cards.data);
        dispatch(updateCurrentCard(cards.data[0]))
        localStorage.setItem('card', cards.data[0]);
    }

    const data = {
        "cardId": current_card.id,
        "userId": current_user.id
    };

    const callbackUser = (user) => {
        dispatch(updateUser(user.data))
        localStorage.setItem('user', user.data.surname);
        navigate("/");
    }

    const callbackSell = () => {
        axios.get('http://localhost:8080/user/' + data.userId)
            .then(data => callbackUser(data))
            .catch(error => console.log('error', error));
    }

    const sellClick = () => {

        axios.post('http://localhost:8080/sell', data)
            .then(data => callbackSell(data))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <Header title={"Sell Card"} />
            <Grid columns={2} relaxed='very' stackable>
                <GridColumn>
                    <h1 style={{ textAlign: "center" }}>Card List</h1>
                    <div style={{ marginLeft: "25%", marginRight: "25%" }}> <TableContainer type="card" list={form} /></div>
                </GridColumn>
                <GridColumn>
                    <DisplayCard img='pika.png'></DisplayCard>
                    <Button onClick={sellClick} secondary>Sell</Button>
                </GridColumn>
            </Grid>
        </>
    );
}