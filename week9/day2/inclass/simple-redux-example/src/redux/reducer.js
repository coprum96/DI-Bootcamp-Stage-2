const initState = {
    property_one: 'text one from store',
    property_two: 'text two from store'
  }
  
  export const reducer = (state = initState, action={}) => {
    switch (action.type) {
        case 'PROP_ONE':
            return {...state, property_one:action.payload}
        case 'PROP_TWO':
            return {...state, property_two: action.payload}
        default:
            return {...state}
    }
  }
  