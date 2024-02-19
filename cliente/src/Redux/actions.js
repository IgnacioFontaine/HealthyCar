import axios from "axios";
import ACTION_TYPES from './actionTypes'

export const getAllVehicules = () => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/vehicules");
    return dispatch({ type: ACTION_TYPES.GET_ALL_VEHICULES, payload: result.data });
  } catch (error) {
    return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
  }
};

export const createVehicule = (vehicule) => async (dispatch) => {
  const newVehicule = await axios.post("http://localhost:3001/vehicule", vehicule);
  return dispatch({ type: ACTION_TYPES.CREATE_VEHICULE, payload: newVehicule.data });
};