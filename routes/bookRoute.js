const { fetchBooks, addBook, deleteBook, editBook, singleFetchBook } = require("../controllers/bookController")
 
const router = require("express").Router()

router.route("/books").get(fetchBooks).post(addBook)
router.route("/:id").delete(deleteBook).patch(editBook).get(singleFetchBook)

// router.get("/books",fetchBooks)
// router.post("/boooks",addBook)
// router.delete("/books",deleteBook) 

module.exports = router    



// curl -X POST http://localhost:4000/books \
//      -H "Content-Type: application/json" \
//      -d '{"bookName": "Example", "bookPrice": 20, "bookAuthor": "Ram", "bookYear": 2020}'