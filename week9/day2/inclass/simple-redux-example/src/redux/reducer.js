const initState = {
    property_one: 'text one from store',
    property_two: 'text two from store'
  }
  
  export const reducer = (state = initState, action) => {
    return { ...state }
  }
  