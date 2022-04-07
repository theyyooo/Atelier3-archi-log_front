import React, { useState } from 'react';
import {Image, Button as Btn } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";

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