import React, { useState } from 'react';
import { Form, Header, Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const CreateRoomButton = (item) => (
    <div>
        <Link to="/create/room"><Button positive>Create a room</Button></Link>
    </div>
);
