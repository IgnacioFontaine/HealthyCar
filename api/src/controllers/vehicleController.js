const { Vehicle } = require("../db");


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


const createVehicleDB = async (
  name, totalKm, oilKm, serviceKm
) => {
  try {
    let newVehicle = Vehicle.create({
      name, totalKm, oilKm, serviceKm
    });
    return newVehicle;
  } catch (error) {
    throw new Error(error);
  }
};


const deleteVehicle = async (id) => {

    const findVehicle = await Vehicle.findOne({ where: { id } });
    
    if (!findVehicle) throw error("Providen id not found");

    await findVehicle.destroy();
    return {message: "Delete success"}
};


module.exports = {
  getAllVehicles,
  getVehicleByName,
  createVehicleDB,
  deleteVehicle
};