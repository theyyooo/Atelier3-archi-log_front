import React, { useState } from 'react';
import { Header } from '../TOOLS/HEADER/Header';
import { Image } from 'semantic-ui-react';  

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