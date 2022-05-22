import React from 'react';
import { Button} from 'semantic-ui-react'
import { Link } from "react-router-dom";

export const CreateRoomButton = (item) => (
    <div>
        <Link to="/create/room"><Button positive>Create a room</Button></Link>
    </div>
);
