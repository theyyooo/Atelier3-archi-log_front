import React, { useState } from 'react';
import { Form, Header, Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { RowCard } from './ROW/RowCard';
import { RowRoom } from './ROW/RowRoom';

export const TableContainer = (props) => {
    const [object, setCards] = useState([{}, {}]);

        const displayHeader = () => {
            if (props.type == "room") {
                return (
                    displayRoomHeader()
                )
            }
            else if (props.type == "card") {
                return (
                    displayCardHeader()
                )
        }
    }

    const displayObject = () => object.map((item, index) => {
        if (props.type == "room") {
            return (
                <RowRoom key={index} item={item} />
            )
        }
        else if (props.type == "card") {
            return (
                <RowCard key={index} item={item} />
            )
        }
    })

    const displayCardHeader = () => {
        return (
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Family</Table.HeaderCell>
                <Table.HeaderCell>Hp</Table.HeaderCell>
                <Table.HeaderCell>Energy</Table.HeaderCell>
                <Table.HeaderCell>Defense</Table.HeaderCell>
                <Table.HeaderCell>Attack</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
        )
    }

    const displayRoomHeader = () => {
        return (
            <Table.Row>
                <Table.HeaderCell>Room</Table.HeaderCell>
                <Table.HeaderCell>User</Table.HeaderCell>
                <Table.HeaderCell>Bet</Table.HeaderCell>
                <Table.HeaderCell>Go</Table.HeaderCell>
            </Table.Row>
        )
    }

    return (
        <Table celled textAlign="center">
            <Table.Header>
                {displayHeader()}
            </Table.Header>
            <Table.Body>
                {displayObject()}
            </Table.Body>
        </Table>
    );
}