import React, { useState } from 'react';
import { GridColumn, Grid, Image } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';
import { TableContainer } from '../TOOLS/TableObject';
import { CreateRoom, CreateRoomButton } from './CreateRoomButton';
import { DisplayCard } from './DisplayCard';

export const PlayMatch = (props) => {

    return (
        <>
            <Header title="Play Room" />
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <h1>Theyyo</h1>
                        <h1>Alain</h1>
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayCard img="pika.png" name="pika" family="test" description="frfrgfrtg" defense="20" attack="50" />
                        <DisplayCard img="pika.png" name="pika2" family="test2" description="frfrgfrtg" defense="40" attack="80" />
                    </Grid.Column>
                    <Grid.Column>
                        <h2>Calcule en cours</h2>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
}