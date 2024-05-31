const initialState = {
    isAgreed: false,
  };
  
  // Редьюсер для обработки действий, связанных с соглашением
  const agreementReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_AGREEMENT':
        return {
          ...state,
          isAgreed: !state.isAgreed,
        };
      default:
        return state;
    }
  };
  
  export default agreementReducer;
  