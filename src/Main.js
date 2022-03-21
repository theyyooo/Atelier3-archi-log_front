import React, { useState } from 'react';
import { Grid, Segment,Menu } from 'semantic-ui-react'
import {User } from './components/user/containers/User'
import {UserForm } from './components/userform/UserForm'
import globalReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


//create store to exchange data
const store = createStore(globalReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//Create function component
export const Main =(props) =>{
  const [currentUser,setCurrentUser]= useState({
                                      id:12,
                                      surname:"John",
                                      lastname:"Doe",
                                      login:"jDoe",
                                      pwd:"jdoepwd",
                                      img:'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png',
                                      money:1000,
                                    });
   function callbackErr(data){
      console.log(data);
  };

  function handleChange(data){
    console.log(data);
    setCurrentUser({
      id:data.id,
      surname:data.surname,
      lastname:data.lastname,
      login:data.login,
      pwd:data.pwd,
      money:data.money,
      img:data.img,
    });
  };

  function submitUserHandler(data){
    console.log("user to submit"+data);
  };

  return (
    <Provider store={store} >
      <Menu>
        <Menu.Item
          name='heropres'
        >
          Hero Presentation
        </Menu.Item>
      </Menu>
      <Grid divided='vertically'>
        <Grid.Row columns={3}>
        <Grid.Column>
          <Segment>
          <UserForm 
                    handleChange={handleChange}
                    submitUserHandler={submitUserHandler}>
                </UserForm>
          </Segment>
        </Grid.Column>
        <Grid.Column>
            <User 
                   id={currentUser.id}
                    surname={currentUser.surname}
                    lastname={currentUser.lastname}
                    login={currentUser.login}
                    pwd={currentUser.pwd}
                    money={currentUser.money}
                    img={currentUser.img}
                    display_type='FULL'>
            </User>
        </Grid.Column>
        <Grid.Column>
          <User id={currentUser.id}
                    surname={currentUser.surname}
                    lastname={currentUser.lastname}
                    login={currentUser.login}
                    pwd={currentUser.pwd}
                    money={currentUser.money}
                    img={currentUser.img}
                    display_type='SHORT'>
          </User>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Provider>
  );
}

