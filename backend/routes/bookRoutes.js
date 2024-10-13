import express from 'express'
import {Book} from '../models/bookModel.js'

const router = express();

//route for saving a new book
router.post('/',async (req,res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishedYear) {
            return res.status(400).send({message : "Send all the required fields : title, author, publishedYear"});
        } else {
            const newBook = {
                title : req.body.title,
                author : req.body.author,
                publishedYear : req.body.publishedYear
            };
            const book = await Book.create(newBook);
            return res.status(201).send(book);
        }
    } catch(err) {
        console.log("OOPS! Error occured while creating new book.");
        return res.status(500).send({message : "error"});
    }
});

//route for getting all books from database
router.get('/',async (req,res) => {
    try{
        const books = await Book.find({});
        return res.status(200).json({
            count : books.length,
            data : books
        });
    } catch(err) {
        console.log("OOPS! Error occured while fetching books.");
        return res.status(500).send({message : "error"});
    }
})

//route for getting one book from database by id
router.get('/:id',async (req,res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        if(!book) {
            return res.status(404).send({message : "Book not found."});
        }
        return res.status(200).json(book);
    } catch(err) {
        console.log("OOPS! Error occured while fetching a book.");
        return res.status(500).send({message : "error"});
    }
})

//route for updating a book
router.put('/:id',async (req,res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishedYear) {
            return res.status(400).send({message : "Send all the required fields : title, author, publishedYear"});
        } 
        const id = req.params.id;
        const book = await Book.findByIdAndUpdate(id,req.body);
        if(!book) {
            return res.status(404).send({message : "Book not found."});
        } 
        return res.status(200).send({message : "Book updated Successfully."});
    } catch(err) {
        console.log("OOPS! Error occured while updating a book.");
        return res.status(500).send({message : "error"});
    }
})

//route for deleting a book
router.delete('/:id',async (req,res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndDelete(id);
        if(!book) {
            return res.status(404).send({message : "Book not found."});
        }
        return res.status(200).send({message : "Book deleted Successfully"});
    } catch(err) {
        console.log("OOPS! Error occured while deleting a book.");
        return res.status(500).send({message : "error"});
    }
})

export default router;