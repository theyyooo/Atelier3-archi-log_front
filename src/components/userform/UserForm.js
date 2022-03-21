import React, { useState } from 'react';
import { Form, Header,Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import {updateUser,submitUser} from '../../actions'

export const UserForm = (props) =>{
   const [currentUser,setCurrentUser]= useState({
                                            id:"",
                                            surname:"",
                                            lastname:"",
                                            img:"",
                                            login:"",
                                            pwd:"",
                                            money:0,

                                        });
    const dispatch = useDispatch();


    function processInput(event, { valueData }){
        const target = event.currentTarget;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(event.target.value);
        let currentVal=currentUser;
        setCurrentUser({...currentUser, [name]: value});
        currentVal[name]= value;
        //props.handleChange(currentVal);
        dispatch(updateUser(currentVal));
    };

    function submitOrder(data){
       // props.submitUserHandler(data);
       dispatch(submitUser(currentUser));
    }
    
    return (
        <Form>
            <Header as='h4' dividing>
                User Registration
            </Header>
            <Form.Field>
                <Form.Input fluid type="number" label='Id' placeholder='Id' name="id" onChange={processInput} value={currentUser.id} />
            </Form.Field>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Surname' placeholder='Surname' name="surname" onChange={processInput} value={currentUser.surname} />
                <Form.Input fluid label='Last Name' placeholder='Last Name' name="lastname"  onChange={processInput} value={currentUser.lastname}/>
            </Form.Group>

            <Form.Field>
                <Form.Input label="Login" placeholder="Login" onChange={processInput}  name="login" value={currentUser.login}/>
            </Form.Field>
            <Form.Field>
                <Form.Input type="password" label="Pwd" placeholder="" onChange={processInput}  name="pwd" value={currentUser.pwd}/>
            </Form.Field>
            <Form.Field>
                <Form.Input label="Image" placeholder="Image" onChange={processInput}  name="img" value={currentUser.img}/>
            </Form.Field>
            <Form.Field>
                <Form.Input label="Money" type="number" placeholder="" onChange={processInput}  name="money" value={currentUser.money}/>
            </Form.Field>
            <Button type='submit' onClick={submitOrder}>Submit</Button>
        </Form>

    );
    
    }