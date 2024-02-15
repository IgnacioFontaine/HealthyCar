//Router Product
const { Router } = require("express");
const {
  getAllVehicles,
  getVehicleByName,
  createVehicleDB,
  deleteVehicle
} = require("../controllers/vehicleController");

const { Author } = require("../db");

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
    const { name, description, authorName } = req.body;

    //Create
    const newProyect = await createProyectDB(
      name,
      description
    );

    let authorDB = await Author.findOne({
      where: {
        name: authorName,
      },
    });

    newProyect.setAuthor(authorDB);

    return res.status(200).json(newProyect);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.put("/modify", async (req, res) => {
  try {
      const { id, newName, newDescription } = req.body;
    
      if (!id) return res.status(404).json({ error: 'Id not found' });
    
      if (!newName) {
        const putProyect = await updateDescriptionProyect(id, newDescription);
        return res.status(200).json(putProyect);
    }

    if(newName) {

        const putProyect = await updateProyect(id, newName, newDescription);
        return res.status(200).json(putProyect);

      }
    
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