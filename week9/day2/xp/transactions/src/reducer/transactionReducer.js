const initialState = {
    list: [],
    currentIndex: -1,
  };
  
  const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INSERT':
        const newList = [...state.list, action.payload];
        localStorage.setItem('transactions', JSON.stringify(newList));
        return {
          ...state,
          list: newList,
        };
      case 'UPDATE':
        const updatedList = [...state.list];
        updatedList[state.currentIndex] = action.payload;
        localStorage.setItem('transactions', JSON.stringify(updatedList));
        return {
          ...state,
          list: updatedList,
        };
      case 'UPDATE-INDEX':
        return {
          ...state,
          currentIndex: action.payload,
        };
      case 'DELETE':
        const filteredList = state.list.filter(
          (transaction, index) => index !== action.payload
        );
        localStorage.setItem('transactions', JSON.stringify(filteredList));
        return {
          ...state,
          list: filteredList,
        };
      default:
        return state;
    }
  };
  
  export default transactionReducer;
  