import React, { useState } from 'react';
import { Form, Header, Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";

export const CreateRoomButton = (item) => (
    <div>
        <Button positive>Create a room</Button>
    </div>
);
