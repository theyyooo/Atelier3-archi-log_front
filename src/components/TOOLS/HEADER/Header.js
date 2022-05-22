import React, { useState } from 'react';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";    
import { useNavigate } from 'react-router';
import { updateUser } from '../../../actions';

export const Header = ({ title = "Main" }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    let current_user = useSelector(state => state.userReducer.user);

    let getInfoUser = () => {
        if (current_user.id) {
            return (
                <>
                    <h1>{localStorage.getItem('user')}</h1>
                    <Button onClick={logout} color="blue">Log Out</Button>
                </>
            )
        }
        return (
            <Button.Group>
                <Link to="/login"><Button>Login</Button></Link>
                <Button.Or text='or' />
                <Link to="/register"><Button color="blue">Register</Button></Link>
            </Button.Group>
        )
    }

    let logout = () => {
        dispatch(updateUser({}))
    }

    let getSolde = () => {
        if (current_user.id) {
            return (
                <h1>{current_user.solde} $</h1>
            )
        }
    }

    return (
        <Segment size="large">
            <Grid columns="equal">
                <Grid.Column verticalAlign="middle" textAlign="center">
                    {getSolde()}
                </Grid.Column>

                <Grid.Column verticalAlign="middle" textAlign="center">
                    <Link to="/"><Icon size="big" name='users' circular /></Link>
                    <h1>{title}</h1>
                </Grid.Column>

                <Grid.Column verticalAlign="middle" textAlign="center">
                    {getInfoUser()}
                </Grid.Column>
            </Grid>
        </Segment>
    );

}