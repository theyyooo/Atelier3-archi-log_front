import React, { useState } from 'react';
import { Form, Image, Button as Btn } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";

export const Button = ({ title, img, url }) => {

    const handleClickButton = () =>{
        
    }

    return (
        <Btn textAlign='center' onClick="handleClickButton">
            {title}
            <Image src={img} size='xsmall' />
        </Btn>

    );

}