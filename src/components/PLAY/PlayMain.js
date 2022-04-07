import React, { useState } from 'react';
import { GridColumn, Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';
import { TableContainer } from '../TOOLS/TableObject';
import { CreateRoom, CreateRoomButton } from './CreateRoomButton';

export const PlayMain = (props) => {

    return (
        <>
            <Header title={"PLAY"} />
            <Grid columns={2} relaxed='very' stackable>
                <GridColumn>
                    <div style={{ marginLeft: "25%", marginRight: "25%" }}> <TableContainer type="room" /></div>
                </GridColumn>
                <GridColumn>
                    <CreateRoomButton/>
                </GridColumn>
            </Grid>
        </>
    );
}