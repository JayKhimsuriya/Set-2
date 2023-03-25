const initialState = {
  cards: [
    { id: 1, name: 'Card 1', visible: true },
    { id: 2, name: 'Card 2', visible: true },
    { id: 3, name: 'Card 3', visible: false },
    { id: 4, name: 'Card 4', visible: true },
    { id: 5, name: 'Card 5', visible: false },
  ],
  hiddenCards: [],
};function cardsReducer(state = initialState, action) {
    switch (action.type) {
      case 'HIDE_CARD':
        const { id } = action.payload;
        const cardToHide = state.cards.find((card) => card.id === id);
        if (cardToHide) {
          return {
            ...state,
            cards: state.cards.filter((card) => card.id !== id),
            hiddenCards: [...state.hiddenCards, cardToHide],
          };
        }
        return state;
      default:
        return state;
    }
  }
  export default cardsReducer