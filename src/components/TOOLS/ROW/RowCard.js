import React, { useState } from 'react';
import { Form, Header, Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";

export const RowCard = (item) => (
    <Table.Row>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell>{item.family}</Table.Cell>
        <Table.Cell>{item.hp}</Table.Cell>
        <Table.Cell>{item.energy}</Table.Cell>
        <Table.Cell>{item.defense}</Table.Cell>
        <Table.Cell>{item.attack}</Table.Cell>
        <Table.Cell>{item.price}</Table.Cell>
    </Table.Row>
);
