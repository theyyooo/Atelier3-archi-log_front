import React from 'react';
import { Table } from 'semantic-ui-react'

export const RowRoom = (item) => (
    <Table.Row>
        <Table.Cell>{item.room}</Table.Cell>
        <Table.Cell>{item.user}</Table.Cell>
        <Table.Cell>{item.bet}</Table.Cell>
        <Table.Cell>{item.room}</Table.Cell>
    </Table.Row>
);
