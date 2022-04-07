import React, { useState } from 'react';
import { Grid, Segment, Menu } from 'semantic-ui-react'
import { User } from './components/exemple-prof/containers/User'
import globalReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Header } from './components/TOOLS/HEADER/Header';
import { CreateRoom, RoomForm } from './components/PLAY/CreateRoom';
import { Button } from './components/MAIN/Button';
import { LoginForm } from './components/USER/LoginForm';
import { TableCard } from './components/TOOLS/TableObject';
import { DisplayCards, NewRoom, PlayRoom } from './components/PLAY/PlayRoom';
import { DisplayPlay, PlayMain } from './components/PLAY/PlayMain';
import { ActionMain } from './components/MAIN/ActionMain';
import { PlayRoomWaitPlayer } from './components/PLAY/playRoomWaitPlayer';
import { PlayRoomWin } from './components/PLAY/PlayRoomWin';
import { PlayRoomLose } from './components/PLAY/PlayRoomLose';
import { PlayMatch } from './components/PLAY/PlayMatch';
import { UserForm } from './components/USER/UserForm';
import { Buy } from './components/BUY/Buy';

//create store to exchange data
const store = createStore(globalReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//Create function component
export const Main = (props) => {
  const [currentUser, setCurrentUser] = useState({
    id: 12,
    surname: "John",
    lastname: "Doe",
    login: "jDoe",
    pwd: "jdoepwd",
    img: 'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png',
    money: 1000,
  });
  function callbackErr(data) {
    console.log(data);
  };

  function handleChange(data) {
    console.log(data);
    setCurrentUser({
      id: data.id,
      surname: data.surname,
      lastname: data.lastname,
      login: data.login,
      pwd: data.pwd,
      money: data.money,
      img: data.img,
    });
  };

  function submitUserHandler(data) {
    console.log("user to submit" + data);
  };

  return (
    <Provider store={store} >
      <ActionMain/>
    </Provider>
  );
}

