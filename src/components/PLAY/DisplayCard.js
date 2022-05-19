import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../TOOLS/HEADER/Header';
import { Card, Image, Icon } from 'semantic-ui-react';
import { TableContainer } from '../TOOLS/TableContainer';

export const DisplayCard = ({img}) => {

    let current_card = useSelector(state => state.cardSelectedReducer.card);

    return (
        <Card>
            <Image src={img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{current_card.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{current_card.family}</span>
                </Card.Meta>
                <Card.Description>
                    {current_card.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <span>Attack: {current_card.attack}</span>
                <span> Defense: {current_card.defense}</span>   
            </Card.Content>
        </Card>
    );
}