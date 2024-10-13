import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BackButton from '../Components/BackButton'
import Shimmer from '../Components/Shimmer'
import axios from 'axios'
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [loading,setLoading] = useState(false);
  const {enqueueSnackbar} = useSnackbar();

  const deleteHandleBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:3000/books/${id}`)
    .then(() => {
      setLoading(false);
      navigate('/');
      enqueueSnackbar('Book deleted successfully',{variant : 'success'});
    }).catch((err) => {
      setLoading(true);
      enqueueSnackbar('Error',{variant : 'error'});
      console.log("OOPS! Error occured while deleting a book.");
    })
  }

  return (
    <div>
      <div className = "flex bg-red-400 p-4">
        <BackButton />
        <h1 className = "text-2xl font-bold text-white mt-1">Delete Book</h1>
      </div>
      {loading ? <Shimmer/> : ''}
      <div className = "border border-rose-900 w-[30%] ml-[500px] mt-[100px] rounded-md p-4  pl-8 pr-8 bg-rose-100/50">
        <h2 className = "font-bold text-lg">Are you sure you want to delete this book?</h2>
        <button className = "border border-white p-2 rounded-lg mt-[20px] ml-[125px] bg-rose-400 text-white" onClick = {deleteHandleBook}>Yes, Delete it</button>
      </div>
    </div>
  )
}

export default DeleteBook;