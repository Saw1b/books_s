const { books } = require("../database/connection")

exports.fetchBooks = async function(req,res){
    // logic to fetch books from database 
    const datas = await books.findAll() // select * from books, books.find(), always returns array
    res.json({
        message : "books fetched successfully", 
        datas
    })
}

exports.addBook = async (req, res) => {
  try {
    // Check if req.body exists
    if (!req.body) {
      return res.status(400).json({ error: "Request body is missing" });
    }

    const { bookName, bookAuthor, bookPrice, bookYear } = req.body;

    // Validate required fields
    if (!bookName || bookPrice === undefined) {
      return res.status(400).json({ 
        error: "bookName and bookPrice are required",
        receivedData: req.body // Helps debugging
      });
    }

    const newBook = await books.create({
      bookName,
      bookAuthor,
      bookPrice,
      bookYear, // Only included if it's part of the model
    });

    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ 
      error: "Server error",
      details: error.message // More detailed error info
    });
  }
};

exports.deleteBook = async function(req,res){
     
    const id = req.params.id // const {id} = req.params
    //  const id = req.body.id 
    // id payisakeypaxi, tyo id ko book chai books table bata udaidim 
    await books.destroy({
        where : {
            id
        }
    }) // delete from books where id = id
    res.json({
      message : "Book Deleted successfully"
    })
}
exports.editBook = async function(req,res){
   try {
     // logic to update book
    // kun id ko chai edit garne tyo id linu paryo . 
    const id = req.params.id
    
    const {bookName,price,bookAuthor,bookYear} = req.body

    await books.update({bookName,price, bookAuthor,bookYear },{
        where : {
            id : id
        }
    })
    // books.findByIdAndUpdate(id,{})

    res.json({
      message : "Book updated successfully"
    })
   } catch (error) {
    res.json({
        message : "Something went wrong"
    })
   }
}

exports.singleFetchBook = async function(req,res){
    // first capture what id is he/she sending 
    const id = req.params.id // 2
    const datas = await books.findByPk(id) // always returns object, mongoose --> findById
    // books.findAll({
    //     where : {
    //         bookName : "hello world", 
    //         authorName : "manish"
    //     }
    // })
    // }) // select * from books where bookName="hello world" && authorName = "manish"
    // const datass = await books.findAll({
    //     where : {
    //         id : id
    //     }
    // }) // always returns array
    res.json({
        message : "Single Book fetched successfully", 
        datas, 
        // datass
    })

}

// module.exports = {fetchBooks,addBook,deleteBook,editBook} 