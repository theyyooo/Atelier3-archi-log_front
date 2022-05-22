import React from 'react';
import { Grid } from 'semantic-ui-react'
import { Header } from '../TOOLS/HEADER/Header';
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