import React, { useState, useEffect } from 'react';
import { GridColumn, Grid} from 'semantic-ui-react'
import { useDispatch} from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';
import { TableContainer } from '../TOOLS/TableContainer';
import { CreateRoomButton } from './CreateRoomButton';
import { updateCurrentRoom } from '../../actions';
import axios from 'axios';


export const PlayMain = (props) => {

    const [form, setForm] = useState([]);

    const dispatch = useDispatch();

    const callbackRooms = (rooms) =>{
        setForm(rooms.data);
        dispatch(updateCurrentRoom(rooms.data[0]))
        localStorage.setItem('room', rooms.data[0]);
    }

    useEffect(() => {
        axios.get('http://localhost:8080/rooms')
            .then(data => callbackRooms(data))
            .catch(error => console.log('error', error));
    }, []);

    return (
        <>
            <Header title={"PLAY"} />
            <Grid columns={2} relaxed='very' stackable>
                <GridColumn>
                    <h1 style={{textAlign:"center"}}>Room List</h1>
                    <div style={{ marginLeft: "25%", marginRight: "25%" }}> <TableContainer type="room" list={form} /></div>
                </GridColumn>
                <GridColumn>
                    <CreateRoomButton />
                </GridColumn>
            </Grid>
        </>
    );
}