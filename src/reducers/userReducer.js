const userReducer= (state={user:{},submitted_user:{}},action) => {
    switch (action.type) {
        case 'UPDATE_USER_ACTION':
            return {user:action.user,submitted_user:state.submitted_user};
        case 'SUBMIT_USER_ACTION':  
            //let userCardList_tempB=JSON.parse(JSON.stringify(action.user));
            console.log("User to Submit");
            console.log(action.user);
            return {user:state.user,submitted_user:action.user};
    default:
      return state;
    }
}

export default userReducer;