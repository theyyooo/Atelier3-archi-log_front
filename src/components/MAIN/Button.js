import React from 'react';
import {Image, Button as Btn } from 'semantic-ui-react'

export const Button = ({ title, img, url }) => {

    const handleClickButton = () =>{
        
    }

    return (
        <Btn size="massive" textAlign='center' onClick="handleClickButton">
            {title}
            <Image src={img} size='xsmall' />
        </Btn>

    );
}