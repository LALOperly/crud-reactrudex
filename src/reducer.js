const initialState = {
    employes: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EMPLOYE':
        return {
          ...state,
          employes: [...state.employes, action.payload],
        };
  
      case 'UPDATE_EMPLOYE':
        return {
          ...state,
          employes: state.employes.map((emp) =>
            emp.numero === action.payload.numero ? action.payload : emp // Add return statement
          ),
        };
  
      case 'DELETE_EMPLOYE':
        return {
          ...state,
          employes: state.employes.filter((emp) => emp.numero !== action.payload), // Add return statement
        };
  
      case 'SET_EMPLOYE':
        return {
          ...state,
          employes: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  