const initialState = {
    age: 20,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "AGE_UP":
        return {
          ...state,
          age: state.age + action.value
        };
      case "AGE_DOWN":
        return {
          ...state,
          age: state.age - action.value
        };
      case "LOADING":
        return {
          ...state,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  