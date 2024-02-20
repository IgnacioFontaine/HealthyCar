import axios from "axios";
import ACTION_TYPES from './actionTypes'

//User actions
export const createUser = (user) => async (dispatch) => {
  const newUser = await axios.post("http://localhost:3001/user/create", user);
  return dispatch({ type: ACTION_TYPES.CREATE_USER, payload: newUser.data });
};

export const getAllUsers = () => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/user");
    return dispatch({ type: ACTION_TYPES.GET_ALL_USERS, payload: result.data });
  } catch (error) {
    return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
  }
};

export const getUserName = (name) => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/user", name);
    return dispatch({ type: ACTION_TYPES.GET_USER_NAME, payload: result.data });
  } catch (error) {
    return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
  }
};

export const modifyUser = (id, updatedFields) => {
  return async (dispatch) => {
    try {

      await axios.put(`http://localhost:3001/user/modify`, id, updatedFields);

      dispatch({
        type: ACTION_TYPES.MODIFY_USER_SUCCESS,
        payload: updatedFields
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.MODIFY_USER_FAILURE,
        payload: error.message
      });
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/user/delete/${id}`);
      
      dispatch({
        type: ACTION_TYPES.DELETE_USER_SUCCESS,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.DELETE_USER_FAILURE,
        payload: error.message
      });
    }
  };
};



//Vehicules actions
export const createVehicule = (vehicule) => async (dispatch) => {
  const newVehicule = await axios.post("http://localhost:3001/vehicule/create", vehicule);
  return dispatch({ type: ACTION_TYPES.CREATE_VEHICULE, payload: newVehicule.data });
};

export const getAllVehicules = () => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/vehicules");
    return dispatch({ type: ACTION_TYPES.GET_ALL_VEHICULES, payload: result.data });
  } catch (error) {
    return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
  }
};

export const getTypeVehicules = (type) => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/vehicules", type);
    return dispatch({ type: ACTION_TYPES.GET_TYPE_VEHICULES, payload: result.data });
  } catch (error) {
    return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
  }
};

export const getNameVehicules = (name) => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/vehicules", name);
    return dispatch({ type: ACTION_TYPES.GET_NAME_VEHICULES, payload: result.data });
  } catch (error) {
    return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
  }
};

export const getUserVehicules = (user) => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/vehicules/user", user.name);
    return dispatch({ type: ACTION_TYPES.GET_USER_VEHICULES, payload: result.data });
  } catch (error) {
    return dispatch({ type: ACTION_TYPES.ERROR, payload: error });
  }
};

export const modifyVehicule = (id, updatedFields) => {
  return async (dispatch) => {
    try {

      await axios.put(`http://localhost:3001/vehicule/modify`, id, updatedFields);

      dispatch({
        type: ACTION_TYPES.MODIFY_VEHICULE_SUCCESS,
        payload: updatedFields
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.MODIFY_VEHICULE_FAILURE,
        payload: error.message
      });
    }
  };
};

export const deleteVehicule = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/vehicule/delete/${id}`);
      
      dispatch({
        type: ACTION_TYPES.DELETE_VEHICULE_SUCCESS,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.DELETE_VEHICULE_FAILURE,
        payload: error.message
      });
    }
  };
};