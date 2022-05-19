import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';
import { Form, Button, GridColumn, Grid } from 'semantic-ui-react';  
import { TableContainer } from '../TOOLS/TableContainer';
import { DisplayCard } from './DisplayCard';
import { useParams } from "react-router";
import { useNavigate } from 'react-router';
import axios from 'axios';
import { updateCurrentCard } from '../../actions';

export const PlayRoom = (props) => {
    const [form, setForm] = useState([]);

    let current_user = useSelector(state => state.userReducer.user);
    

    let { room } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const callbackAllCardToSell = (cards) => {
        setForm(cards.data);
        dispatch(updateCurrentCard(cards.data[0]))
        localStorage.setItem('card', cards.data[0]);
    }

    useEffect(() => {
        if (!current_user.id) {
            navigate("/login");
        }
        axios.get('http://localhost:8080/cards/' + current_user.id + '/sell')
            .then(data => callbackAllCardToSell(data))
            .catch(error => console.log('error', error));
    }, []);

    return (
        <>
        <Header title={"Play Room " + room} />
        <Grid columns={2} relaxed='very' stackable>
            <GridColumn>
                <div style={{ marginLeft: "25%", marginRight: "25%" }}> <TableContainer type="card" list={form} /></div>
            </GridColumn>
            <GridColumn>
                <DisplayCard img='pika.png'></DisplayCard>
                <Button secondary>Play</Button>
            </GridColumn>
        </Grid>
        </>
    );
}