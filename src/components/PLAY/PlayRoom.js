import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';
import { Form, Button, GridColumn, Grid } from 'semantic-ui-react';  
import { TableContainer } from '../TOOLS/TableObject';
import { DisplayCard } from './DisplayCard';

export const PlayRoom = (props) => {
    const [form, setForm] = useState({
        name: "",
        bet: 0,
    });

    return (
        <>
        <Header title={"Play Room"} />
        <Grid columns={2} relaxed='very' stackable>
            <GridColumn>
                <div style={{ marginLeft: "25%", marginRight: "25%" }}> <TableContainer type="card" /></div>
            </GridColumn>
            <GridColumn>
                <DisplayCard img='pika.png' name="pika" family="shtrumph" description="blablablablablablablablabla" attack="50" defense="75"></DisplayCard>
                <Button secondary>Play</Button>
            </GridColumn>
        </Grid>
        </>
    );
}