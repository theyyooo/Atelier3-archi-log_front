const cardSelectedReducer = (state={card:{}},action) => {
    switch (action.type) {
        case 'UPDATE_CARD_SELECTED':
            return {card: action.card};
    default:
      return state;
    }
}

export default cardSelectedReducer;