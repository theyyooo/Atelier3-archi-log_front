import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';
import { Image } from 'semantic-ui-react';  
import { TableContainer } from '../TOOLS/TableObject';
import { DisplayCard } from './DisplayCard';

export const PlayRoomWaitPlayer = (props) => {
    const [form, setForm] = useState({
        name: "",
        bet: 0,
    });

    return (
        <>
        <Header title={"Play Room"} />
        <Image textAlign="center" src="clock.svg" wrapped ui={false}></Image>
        <h1>Wait Player</h1>
        </>
    );
}