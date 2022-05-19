export const updateUser = (user) => {
    return {
        type: 'UPDATE_USER_ACTION',
        user: user
    };
}

export const updateCurrentCard = (card) => {
    return {
        type: 'UPDATE_CARD_SELECTED',
        card: card
    };
}

export const updateCurrentRoom = (room) => {
    return {
        type: 'UPDATE_ROOM_SELECTED',
        room: room
    };
}



