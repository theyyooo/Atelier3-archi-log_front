import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Grid, Button, GridColumn } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';
import { DisplayCard } from '../PLAY/DisplayCard';
import { TableContainer } from '../TOOLS/TableContainer';
import axios from 'axios';
import { updateCurrentCard } from '../../actions';
import { updateUser } from '../../actions';

export const Buy = (props) => {
    const [form, setForm] = useState([]);

    const callbackAllCardToBuy = (cards) => {
        setForm(cards.data);
        dispatch(updateCurrentCard(cards.data[0]))
        localStorage.setItem('card', cards.data[0]);
    }

    let current_user = useSelector(state => state.userReducer.user);
    let current_card = useSelector(state => state.cardSelectedReducer.card);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = {
        "cardId": current_card.id,
        "userId": current_user.id
    };

    const callbackBuy = () => {
        axios.get('http://localhost:8080/user/' + data.userId)
            .then(data => callbackUser(data))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        axios.get('http://localhost:8080/cards/buy')
            .then(data => callbackAllCardToBuy(data))
            .catch(error => console.log('error', error));
    }, []);

    const callbackUser = (user) =>{
        dispatch(updateUser(user.data))
        localStorage.setItem('user', user.data.surname);
        navigate("/");
    }

    const buyClick = () => {

        if (!data.userId) {
            navigate("/login");
            return
        }
        axios.post('http://localhost:8080/buy', data)
            .then(data => callbackBuy(data))
            .catch(error => console.log('error', error));
    }


    return (
        <>
            <Header title={"Buy Card"} />
            <Grid columns={2} relaxed='very' stackable>
                <GridColumn>
                    <h1 style={{textAlign:"center"}}>Card List</h1>
                    <div style={{ marginLeft: "25%", marginRight: "25%" }}> <TableContainer type="card" list={form} /></div>
                </GridColumn>
                <GridColumn>
                    <DisplayCard img='pika.png'></DisplayCard>
                    <Button onClick={buyClick} secondary>Buy</Button>
                </GridColumn>
            </Grid>
        </>
    );
}