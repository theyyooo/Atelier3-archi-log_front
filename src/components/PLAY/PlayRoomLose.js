import React, { useState } from 'react';
import { GridColumn, Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';
import { TableContainer } from '../TOOLS/TableObject';
import { CreateRoom, CreateRoomButton } from './CreateRoomButton';

export const PlayRoomLose = (props) => {

    return (
        <>
            <Header title={"PLAY"} />
            <h1>YOU LOSE</h1>
            <h2>100$</h2>
        </>
    );
}