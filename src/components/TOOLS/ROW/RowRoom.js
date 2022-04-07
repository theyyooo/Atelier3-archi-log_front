import React, { useState } from 'react';
import { Form, Header, Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";

export const RowRoom = (item) => (
    <Table.Row>
        <Table.Cell>{item.room}</Table.Cell>
        <Table.Cell>{item.user}</Table.Cell>
        <Table.Cell>{item.bet}</Table.Cell>
        <Table.Cell>{item.room}</Table.Cell>
    </Table.Row>
);
