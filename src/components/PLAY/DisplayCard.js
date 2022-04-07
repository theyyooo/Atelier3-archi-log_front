import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';
import { Card, Image, Icon } from 'semantic-ui-react';
import { TableContainer } from '../TOOLS/TableObject';

export const DisplayCard = ({img, name, family, description, defense, attack}) => {

    return (
        <Card>
            <Image src={img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{family}</span>
                </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <span>Attack: {attack}</span>
                <span> Defense: {defense}</span>   
            </Card.Content>
        </Card>
    );
}