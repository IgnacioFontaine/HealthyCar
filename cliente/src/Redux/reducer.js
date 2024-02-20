import ACTION_TYPES from './actionTypes'

//Config initialState
const initialState = {
  sesion_user: [],
  vehicules_user: [],
  name_vehicules: [],
  type_vehicules:[],
};

//Config reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ACTION_TYPES.GET_USER_NAME:
      return {
        ...state,
        sesion_user: action.payload,
      }
    
    case ACTION_TYPES.GET_USER_VEHICULES:
      return {
        ...state,
        vehicules_user: action.payload,
      }
    
    case ACTION_TYPES.GET_NAME_VEHICULES:
      return {
        ...state,
        name_vehicules: action.payload,
      }
    
    case ACTION_TYPES.GET_TYPE_VEHICULES:
      return {
        ...state,
        type_vehicules: action.payload,
      }
    
    case ACTION_TYPES.CREATE_USER:
      if (action.payload.status === 200) {
        return {
          ...state,
          errormsg: {},
        };
      } else {
        return {
          ...state,
          errormsg: action.payload,
        };
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;