const roomSelectedReducer = (state={room:{}},action) => {
    switch (action.type) {
        case 'UPDATE_ROOM_SELECTED':
            return {room: action.room};
    default:
      return state;
    }
}

export default roomSelectedReducer;