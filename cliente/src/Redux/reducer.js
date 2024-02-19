import ACTION_TYPES from './actionTypes'

//Config initialState
const initialState = {
  sesion_user: [],
  vehicules_user:[],
};

//Config reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return {
        ...state,
      };
  }
};

export default reducer;