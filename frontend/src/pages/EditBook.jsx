import React from "react";
import Shimmer from '../Components/Shimmer'
import BackButton from '../Components/BackButton'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from "notistack";


const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [description,setDescription] = useState('');
  const [genre,setGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        setLoading(false);
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishedYear(response.data.publishedYear);
      }).catch((err) => {
        console.log("OOPS! Error occured while fetching book for edit.");
        setLoading(true);
      })
  }, []);

  const handleEditBook = () => {
    const data = { title, author, publishedYear };
    setLoading(true);
    axios.put(`http://localhost:3000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
        enqueueSnackbar('Book edited successfully',{variant : 'success'});
      }).catch((err) => {
        setLoading(false);
        enqueueSnackbar('Error',{variant : 'error'});
        console.log("OOPS! Error occured while adding edited book.");
      })
  }

  return (
    <div>
      <div className = "flex bg-red-400 p-4">
        <BackButton />
        <h1 className = "text-2xl font-bold text-white mt-1">Edit Book</h1>
      </div>
      {loading ? <Shimmer /> : ''}
        <div className ="border border-rose-900 w-[40%] ml-[425px] mt-[40px] rounded-md p-4  pl-8 pr-8 bg-rose-100/50">
          <div className = "m-3">
            <label className = "mr-2 text-lg font-semibold m-2">Title : </label>
            <input className = "p-2 border w-[100%] border-rose-800 bg-transparent rounded-md" type = "text" value = {title} onChange = {(e) => setTitle(e.target.value)}></input>
          </div>
          <div className = "m-3">
            <label className = "mr-2 text-lg font-semibold m-2">Author : </label>
            <input className = "p-2 border w-[100%] border-rose-800 bg-transparent rounded-md" type = "text" value = {author} onChange = {(e) => setAuthor(e.target.value)}></input>
          </div>
          <div className = "m-3">
            <label className = "mr-2 text-lg font-semibold m-2">Published Year : </label>
            <input className = "p-2 border w-[100%] border-rose-800 bg-transparent rounded-md" type = "text" value = {publishedYear} onChange = {(e) => setPublishedYear(e.target.value)}></input>
          </div>
          <div className = "m-3">
            <label className = "mr-2 text-lg font-semibold m-2">Genre : </label>
            <input className = "p-2 border w-[100%] border-rose-800 bg-transparent rounded-md" type = "text" value = {genre} onChange = {(e) => setGenre(e.target.value)}></input>
          </div>
          <div className = "m-3">
            <label className = "mr-2 text-lg font-semibold m-2">Description : </label>
            <input className = "p-2 border w-[100%] border-rose-800 bg-transparent rounded-md" type = "text" value = {description} onChange = {(e) => setDescription(e.target.value)}></input>
          </div>
          <button className = "border border-white p-2 rounded-lg mt-[20px] ml-[200px] bg-rose-400 text-white" onClick = {handleEditBook}>Save Changes</button>
        </div>
      </div>
  )
}

export default EditBook;