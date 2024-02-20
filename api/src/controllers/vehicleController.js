const { Vehicle } = require("../db");
const { User } = require("../db");


const getAllVehicles = async () => {
  try {
    let vehicles = await Vehicle.findAll({});
    return vehicles;
  } catch (error) {
    throw new Error(error);
  }

}

const getVehicleByName = async (name) => {
  try {
    let vehicle = await Vehicle.findAll({
      where: {
        name: name,
      },
    });
    return vehicle;
  } catch (error) {
    throw new Error(error);
  }
};

const getVehicleByType = async (type) => {
  try {
    let vehicleByType = await Vehicle.findAll({
      where: {
        type: type,
      },
    });
    return vehicleByType;
  } catch (error) {
    throw new Error(error);
  }
};

const getUserVehicles = async (userName) => {
  try {
    let vehiclesUser = await Vehicle.findAll({
      where: {
        User: {
          name: userName
        },
      },
    });
    return vehiclesUser;
  } catch (error) {
    throw new Error(error);
  }
};


const createVehicleDB = async (
  name, type, totalKm, oilKm, serviceKm
) => {
  try {
    let newVehicle = Vehicle.create({
      name, type, totalKm, oilKm, serviceKm
    });
    return newVehicle;
  } catch (error) {
    throw new Error(error);
  }
};

const updateVehicle = async (id, newType, newTotalKm, newOilKm, newServiceKm ) => {
  try {
    let vehicule_modif = await User.findOne({ where: { id } })

    if (!vehicule_modif) {
    throw new Error('The id was not found or it is incorrect');
    }

    if (newType && newTotalKm && newOilKm && newServiceKm) {
      vehicule_modif = await Vehicle.update(
        {
          type: newType,
          totalKm: newTotalKm,
          oilKm: newOilKm,
          serviceKm: newServiceKm
        },
            
            { where: { id } }
        );
    }

    if (newType && newTotalKm && newOilKm && !newServiceKm) {
      vehicule_modif = await Vehicle.update(
        {
          type: newType,
          totalKm: newTotalKm,
          oilKm: newOilKm
        },
            
            { where: { id } }
        );
    }

    if (newType && newTotalKm && !newOilKm && !newServiceKm) {
      vehicule_modif = await Vehicle.update(
        {
          type: newType,
          totalKm: newTotalKm
        },
            
            { where: { id } }
        );
    }

    if (newType && !newTotalKm && !newOilKm && !newServiceKm) {
      vehicule_modif = await Vehicle.update(
        {
          type: newType
        },
            
            { where: { id } }
        );
    }
    

  } catch (error) {
    throw new Error(error);
  }
}


const deleteVehicle = async (id) => {

    const findVehicle = await Vehicle.findOne({ where: { id } });
    
    if (!findVehicle) throw error("Providen id not found");

    await findVehicle.destroy();
    return {message: "Delete success"}
};


module.exports = {
  getAllVehicles,
  getVehicleByName,
  getVehicleByType,
  getUserVehicles,
  createVehicleDB,
  updateVehicle,
  deleteVehicle
};