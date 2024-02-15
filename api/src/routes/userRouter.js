//Router Product
const { Router } = require("express");
const {
  getAuthors,
  createAuthorDB,
  deleteAuthor
} = require("../controllers/authorController");

const router = Router();

router.get("/", async (req, res) => {
  try {
      const authors = await getAuthors()
      return res.status(200).json(authors);
    
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { name } = req.body;

    //Create
    const newAuthor = await createAuthorDB(
      name
    );

    return res.status(200).json(newAuthor);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.delete("/delete/:id",async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) return res.status(404).json({ error: "Invalid id" });
    await deleteAuthor(id);

    return res.status(200).json({ message: "Author deleted successfully" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})


module.exports = router;