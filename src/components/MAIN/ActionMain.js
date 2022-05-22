import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import { Button } from './Button';
import { Header } from '../TOOLS/HEADER/Header';
import { Link } from "react-router-dom";

export const ActionMain = () => {

    return (
        <>
            <Header />
            <Segment placeholder>
                <Grid container columns={3}>
                    <Grid.Column verticalAlign="middle" textAlign="center">
                        <Link to="/buy"><Button title={"Buy"} img={"/buy.svg"} url={"/buy"} /></Link>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" textAlign="center">
                        <Link to="/sell"><Button title={"Sell"} img={"/sell.svg"} url={"/sell"} /></Link>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" textAlign="center">
                        <Link to="/play"><Button title={"Play"} img={"/play.svg"} url={"/play"} /></Link>
                    </Grid.Column>
                </Grid>
            </Segment>
        </>
    );

}