import React, { useState } from 'react';
import globalReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ActionMain } from './components/MAIN/ActionMain';
import { PlayMain } from './components/PLAY/PlayMain';
import { Sell } from './components/SELL/Sell';
import { Buy } from './components/BUY/Buy';
import { CreateRoom } from './components/PLAY/CreateRoom';
import { LoginForm } from './components/USER/LoginForm';
import { UserForm } from './components/USER/UserForm';
import { PlayRoom } from './components/PLAY/PlayRoom';


//create store to exchange data
const store = createStore(globalReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const Main = (props) => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActionMain />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<UserForm />}></Route>
          <Route path="/play" element={<PlayMain/>}></Route>  
          <Route path="/sell" action={"sell"} element={<Sell/>}></Route>
          <Route path="/buy" action={"buy"} element={<Buy/>}></Route>
          <Route path="/create/room" element={<CreateRoom />}></Route>
          <Route path="/play/:room" element={<PlayRoom/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider >
  );
}