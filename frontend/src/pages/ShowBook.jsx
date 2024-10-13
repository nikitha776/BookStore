import React from "react";
import BackButton from '../Components/BackButton'
import { useState, useEffect } from 'react'
import Shimmer from '../Components/Shimmer'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      }).catch((err) => {
        console.log("OOPS! Error occured while showing book.");
        setLoading(true);
      })
  }, []);

  return (
    <div>
      <div className = "flex bg-red-400 p-4">
        <BackButton />
        <h1 className = "text-2xl font-bold text-white mt-1">Book Details</h1>
      </div>
      {
        loading ? <Shimmer /> :
          <div className="border border-rose-900 w-[50%] ml-[350px] mt-[100px] rounded-md p-8 bg-rose-100/50">
            <div>
              <span className = "font-bold m-4">Title : </span>
              <span>{book.title}</span>
            </div>
            <div>
              <span className = "font-bold m-4">Author : </span>
              <span>{book.author}</span>
            </div>
            <div>
              <span className = "font-bold m-4">Published Year : </span>
              <span>{book.publishedYear}</span>
            </div>
            <div>
              <span className = "font-bold m-4">Create Time : </span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div>
              <span className = "font-bold m-4">Update Time :</span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
      }
    </div>
  );
}

export default ShowBook;