const userReducer = (state={user:{}},action) => {
    switch (action.type) {
        case 'UPDATE_USER_ACTION':
            return {user: action.user};
    default:
      return state;
    }
}

export default userReducer;