//Router Product
const { Router } = require("express");
const {
  getUsers,
  getUserByName,
  createUserDB,
  updatePassword,
  deleteUser
} = require("../controllers/userController");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      const user_name = await getUserByName(name)
      
      return res.status(200).json(user_name);
        
    }
    if (!name) {
      const users = await getUsers()
      return res.status(200).json(users);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { name, password } = req.body;

    //Create
    const newUser = await createUserDB(
      name, password
    );

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.put("/modify", async (req, res) => {
  try {
      const { id, newPassword } = req.body;
    
      if (!id) return res.status(404).json({ error: 'Id not found' });
    
        const putUser = await updatePassword(id, newPassword);
        return res.status(200).json(putUser);
    
    
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

router.delete("/delete/:id",async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) return res.status(404).json({ error: "Invalid id" });
    await deleteUser(id);

    return res.status(200).json({ message: "Author deleted successfully" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})


module.exports = router;