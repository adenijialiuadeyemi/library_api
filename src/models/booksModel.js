import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type: Date, required: true },
    edition: { type: String },
    summary: { type: String },
    availability: { type: Boolean, default: true },
  });
  
export const Book = mongoose.model('Book', bookSchema);