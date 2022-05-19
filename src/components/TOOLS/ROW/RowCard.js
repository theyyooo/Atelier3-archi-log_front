import React, { useState } from 'react';
import { Form, Header, Button, Icon, Label, Menu, Table, ItemDescription } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentCard } from '../../../actions';

export const RowCard = (item) => {  

    const dispatch = useDispatch();

    const onClick = () =>{
        dispatch(updateCurrentCard(item.item))
        localStorage.setItem('card', item.item);
    }

    return (
        <Table.Row>
            <Table.Cell><button onClick={onClick} class="ui button">Séléctionner</button></Table.Cell>
            <Table.Cell>{item.item.name}</Table.Cell>
            <Table.Cell>{item.item.description}</Table.Cell>
            <Table.Cell>{item.item.family}</Table.Cell>
            <Table.Cell>{item.item.hp}</Table.Cell>
            <Table.Cell>{item.item.energy}</Table.Cell>
            <Table.Cell>{item.item.defense}</Table.Cell>
            <Table.Cell>{item.item.attack}</Table.Cell>
            <Table.Cell>{item.item.price}</Table.Cell>
        </Table.Row>
    );
}
