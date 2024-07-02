import Book from "../models/bookModel.js"

const getBook = async(req, res) => {
try {
    const { id } = req.params

    const book = await Book.findById(id)
    res.status(200).json({
        _id: book._id,
        image: book.image,
        title: book.title,
        description: book.description
    })
} catch (error) {
  console.log(error)   
  res.status(500).json({message: error})
}
}

const getAllBooks = async(req, res) => {
try {
    const Books = await Book.find()
    res.status(200).json(Books)
} catch (error) {
    console.log(error)
    res.status(200).json(error)
}
}


const createBook = async(req, res) => {
    try {
        const {image,title, description} = req.body

        const book = await Book.create({
                        image,
                        title,
                        description
                                     })

         if(book) {
          res.status(200).json(book)
           }

    } catch (error) {
        res.status(500).json({message:'Invalid Title or Description'})
    }

}

const updateBook = async(req, res) => {
try {
    const { id } = req.params
    const {image, title, description} = req.body

    const book = await Book.findById(id)

    if(book) {
        book.image = image || book.image
        book.title = title || book.title
        book.description = description || book.description

        const updatedBook = await book.save()

        res.status(200).json(updatedBook)
    }

} catch (error) {
  res.status(500).json(error)
  console.log({message: error})   
}
}

const deleteBook = async(req, res) => {
try {
    const { id } = req.params
    await Book.findByIdAndDelete(id)

    res.status(200).json({message: 'deleted successfully', _id: id})
} catch (error) {
    res.status(500).json(error)
    console.log(error)
}
}

export {
   getBook,
   getAllBooks,
   updateBook,
   deleteBook,
   createBook
}