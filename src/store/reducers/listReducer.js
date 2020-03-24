const initialState = { listElements: [] }

function setElementsList(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'ADD_ELEMENT':
      nextState = {
        ...state,
        listElements: [...state.listElements, action.value],
      };
      return nextState || state;
    case 'DELETE_ELEMENT':
      nextState = {
        ...state,
        listElements: state.listElements.filter(element => (element.id !== action.value))
      }
      return nextState || state;
    default:
      return state;
  }
}

export default setElementsList
