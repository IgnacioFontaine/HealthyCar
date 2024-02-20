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

    case ACTION_TYPES.MODIFY_USER_SUCCESS:
      state.sesion_user.forEach((user)=>{
                if(user.id === action.payload.id){
                  user.name = action.payload.name,
                  user.password = action.payload.password
                }
            })
        return {
            ...state,
            sesion_user: [...state.sesion_user]
      };
    
    case ACTION_TYPES.MODIFY_USER_FAILURE:
      return state;

    case ACTION_TYPES.DELETE_USER_SUCCESS:
      return {
        ...state, all_companies: state.all_companies.filter(all_companies => all_companies.id !== action.payload)
      };
    
    case ACTION_TYPES.DELETE_USER_FAILURE:
      return state;

    case ACTION_TYPES.CREATE_VEHICULE:
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

    case ACTION_TYPES.MODIFY_VEHICULE_SUCCESS:
      state.vehicules_user.forEach((vehicle)=>{
                if(vehicle.id === action.payload.id){
                  vehicle.name = action.payload.name,
                  vehicle.type = action.payload.type,
                  vehicle.totalKm = action.payload.totalKm,
                  vehicle.oilKm = action.payload.oilKm,
                  vehicle.serviceKm = action.payload.serviceKm
                }
            })
        return {
            ...state,
            vehicules_user: [...state.vehicules_user]
      };
    
    case ACTION_TYPES.MODIFY_VEHICULE_FAILURE:
      return state;

    case ACTION_TYPES.DELETE_VEHICULE_SUCCESS:
      return {
        ...state, all_companies: state.all_companies.filter(all_companies => all_companies.id !== action.payload)
      };
    
    case ACTION_TYPES.DELETE_VEHICULE_FAILURE:
      return state;

    default:
      return {
        ...state,
      };
  }
};

export default reducer;