import React, { useState } from 'react';
import { Form, Header as Head, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";

export const Header = (props) => {
    const [currentUser, setCurrentUser] = useState({
        id: "",
        surname: "theyoo",
        lastname: "",
        img: "",
        login: "",
        pwd: "",
        money: 100,

    });

    return (
        <Head as='h1' textAlign='center'>
            {currentUser.money}
            {props.title}
            {currentUser.surname}
        </Head>

    );

}