//Router Product
const { Router } = require("express");
const {
  getAllVehicles,
  getVehicleByName,
  createVehicleDB,
  updateVehicle,
  deleteVehicle
} = require("../controllers/vehicleController");

const { User } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      const vehicle_name = await getVehicleByName(name)
      
      return res.status(200).json(vehicle_name);
        
    }
    if (!name) {
      const vehicles = await getAllVehicles()
      return res.status(200).json(vehicles);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { name, totalKm, oilKm, serviceKm } = req.body;

    //Create
    const newVehicle= await createVehicleDB(
      name,
      totalKm,
      oilKm,
      serviceKm
    );

    // let UserDB = await User.findOne({
    //   where: {
    //     name: authorName,
    //   },
    // });

    // newVehicle.setUser(userDB);

    return res.status(200).json(newVehicle);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.put("/modify", async (req, res) => {
  try {
      const { id, newTotalKm, newOilKm, newServiceKm } = req.body;
    
      if (!id) return res.status(404).json({ error: 'Id not found' });

        const putVehicle = await updateVehicle(id, newTotalKm, newOilKm, newServiceKm);
        return res.status(200).json(putVehicle);

      
    
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

router.delete("/delete/:id",async (req, res) => {
  const { id } = req.params;
  
  try {
    if (!id) return res.status(404).json({ error: "Invalid id" });
    await deleteVehicle(id);

    return res.status(200).json({ message: "Vehicle deleted successfully" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});




module.exports = router;