import mongoose from 'mongoose'

const bookSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        author : {
            type : String,
            required : true
        },
        publishedYear : {
            type : Number,
            required : true
        },
        genre : {
            type : String,
        },
        description : {
            type : String,
        }
    },
    {
        timestamps : true,
    }
);

export const Book = mongoose.model("Info",bookSchema);