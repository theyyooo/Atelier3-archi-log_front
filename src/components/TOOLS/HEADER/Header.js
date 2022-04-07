import React, { useState } from 'react';
import { Segment, Grid, Icon, Header as Head } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";

export const Header = ({title = "Main"}) => {
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
        <Segment size="large">
            <Grid columns="equal">
                <Grid.Column verticalAlign="middle" textAlign="center">
                    <h1>{currentUser.money} €</h1>
                </Grid.Column>

                <Grid.Column verticalAlign="middle" textAlign="center">
                    <Icon size="big" name='users' circular />
                    <h1>{title}</h1>
                </Grid.Column>

                <Grid.Column verticalAlign="middle" textAlign="center">
                    <h1>{currentUser.surname}</h1>
                </Grid.Column>
            </Grid>
        </Segment>
    );

}