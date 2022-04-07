import React, { useState } from 'react';
import { Grid, Segment} from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { Button } from './Button';
import { Header } from '../TOOLS/HEADER/Header';

export const ActionMain = () => {

    return (
        <>
            <Header />
            <Segment placeholder>
                <Grid container columns={3}>
                    <Grid.Column verticalAlign="middle" textAlign="center">
                        <Button title={"Buy"} img={"/buy.svg"} url={"/buy"} />
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" textAlign="center">
                        <Button title={"Sell"} img={"/sell.svg"} url={"/sell"} />
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" textAlign="center">
                        <Button title={"Play"} img={"/play.svg"} url={"/play"} />
                    </Grid.Column>
                </Grid>
            </Segment>
        </>
    );

}