import React, { useState } from 'react';
import { Grid, Button, GridColumn } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';
import { DisplayCard } from '../PLAY/DisplayCard';
import { TableContainer } from '../TOOLS/TableObject';

export const Buy = (props) => {
    const [form, setForm] = useState({
        name: "",
        bet: 0,
    });

    return (
        <>
            <Header title={"Buy Card"} />
            <Grid columns={2} relaxed='very' stackable>
                <GridColumn>
                    <div style={{ marginLeft: "25%", marginRight: "25%" }}> <TableContainer type="card" /></div>
                </GridColumn>
                <GridColumn>
                    <DisplayCard img='pika.png' name="pika" family="shtrumph" description="blablablablablablablablabla" attack="50" defense="75"></DisplayCard>
                    <Button secondary>Buy</Button>
                </GridColumn>
            </Grid>
        </>
    );
}