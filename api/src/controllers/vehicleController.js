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


const updateProyect = async (
  id,
  newName,
  newDescription) => {
  try {
    let proyect_modif = await Proyect.findOne({ where: { id } })
    

    if (!proyect_modif) {
    throw new Error('The id was not found or it is incorrect');
    }

    if (proyect_modif) {
      proyect_modif = await Proyect.update({
        name: newName,
        description: newDescription
      },
        { where: { id } }
        );
    }

  } catch (error) {
    throw new Error(error);
  }
};

const updateDescriptionProyect = async (
  id,
  newDescription) => {
  try {
    let proyect_modif = await Proyect.findOne({ where: { id } })

    if (!proyect_modif) {
    throw new Error('The id was not found or it is incorrect');
    }

    if (proyect_modif) {
      proyect_modif = await Proyect.update(
            { description:  newDescription },
            { where: { id } }
        );
    }

  } catch (error) {
    throw new Error(error);
  }
};

const deleteProyect = async (id) => {

    const findProyect = await Proyect.findOne({ where: { id } });
    
    if (!findProyect) throw error("Providen id not found");

    await findProyect.destroy();
    return {message: "Delete success"}
};


module.exports = {
  getAllProyects,
  getProyectByName,
  createProyectDB,
  updateProyect,
  updateDescriptionProyect,
  deleteProyect
};