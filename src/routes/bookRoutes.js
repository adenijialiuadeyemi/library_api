import express from 'express'
import { Book } from '../models/booksModel.js'

const router = express.Router()

// Retrieve all books
router.get('/', async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Books retrieved successfully',
        data: { books }
      });
    } catch (error) {
      res.status(500).json({ status: 'error', code: 500, message: 'Server error' });
    }
  });
  
  // Retrieve a specific book by ID
  router.get('/:bookId', async (req, res) => {
    try {
      const book = await Book.findById(req.params.bookId);
      if (!book) {
        return res.status(404).json({ status: 'error', code: 404, message: 'Book not found' });
      }
      res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Book retrieved successfully',
        data: { book }
      });
    } catch (error) {
      res.status(500).json({ status: 'error', code: 500, message: 'Server error' });
    }
  });
  
  // Add a new book
  router.post('/', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json({
          status: 'success',
          code: 201,
          message: 'Book added successfully',
          data: { book }
        });
        return res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Book added successfully',
        data: { book }
      });
    } catch (error) {
        console.log(error)
      res.status(400).json({ status: 'error', code: 400, message: 'Invalid data' });
    }
  });
  
  // Update an existing book
  router.put('/:bookId', async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true });
      if (!book) {
        return res.status(404).json({ status: 'error', code: 404, message: 'Book not found' });
      }
      res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Book updated successfully',
        data: { book }
      });
    } catch (error) {
      res.status(400).json({ status: 'error', code: 400, message: 'Invalid data' });
    }
  });
  
  // Delete a book
  router.delete('/:bookId', async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.bookId);
      if (!book) {
        return res.status(404).json({ status: 'error', code: 404, message: 'Book not found' });
      }
      res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Book deleted successfully'
      });
    } catch (error) {
      res.status(500).json({ status: 'error', code: 500, message: 'Server error' });
    }
  });
  
export default router;