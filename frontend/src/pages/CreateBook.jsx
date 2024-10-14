import React from "react";
import BackButton from '../Components/BackButton'
import Shimmer from '../Components/Shimmer'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [description,setDescription] = useState('');
  const [genre,setGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const handleSaveBook = () => {
    const data = { title, author, publishedYear, genre, description};
    setLoading(true);
    axios.post('http://localhost:3000/books', data)
      .then(() => {
        navigate('/');
        enqueueSnackbar('Book created successfully',{variant : 'success'});
        setLoading(false);
      }).catch((err) => {
        console.log("OOPS! Error occure while creating book.");
        enqueueSnackbar('Error',{variant : 'error'});
        setLoading(true);
      })
  }

  return (
    <div>
      <div className = "flex bg-red-400 p-4">
        <BackButton />
        <h1 className = "text-2xl font-bold text-white mt-1">Create Book</h1>
      </div>
      {loading ? <Shimmer /> : ''}
        <div className = "border border-rose-900 w-[30%] ml-[500px] mt-[100px] rounded-md p-4  pl-8 pr-8 bg-rose-100/50">
          <div className ="m-4">
            <label className = "mr-2 text-lg font-semibold">Title</label>
            <input className = "p-2 border w-[100%] border-rose-800 bg-transparent rounded-md" type="text" value = {title} onChange = {(e) => setTitle(e.target.value)}></input>
          </div>
          <div className = "m-4">
            <label className = "text-lg font-semibold">Author</label>
            <input className = "p-2 border w-[100%] border-rose-800 bg-transparent rounded-md" type="text" value = {author} onChange = {(e) => setAuthor(e.target.value)}></input>
          </div>
          <div className = "m-4">
            <label className = "text-lg font-semibold">Published Year</label>
            <input className = "p-2 border w-[100%] border-rose-800 bg-transparent rounded-md" type="text" value = {publishedYear} onChange = {(e) => setPublishedYear(e.target.value)}></input>
          </div>
          <div className = "m-3">
            <label className = "mr-2 text-lg font-semibold m-2">Genre : </label>
            <input className = "p-2 border w-[100%] border-rose-800 bg-transparent rounded-md" type = "text" value = {genre} onChange = {(e) => setGenre(e.target.value)}></input>
          </div>
          <div className = "m-3">
            <label className = "mr-2 text-lg font-semibold m-2">Description : </label>
            <input className = "p-2 border w-[100%] border-rose-800 bg-transparent rounded-md" type = "text" value = {description} onChange = {(e) => setDescription(e.target.value)}></input>
          </div>
          <button className = "border border-white p-1 w-[80px] rounded-lg mt-[20px] ml-[150px] bg-rose-400 text-white" onClick = {handleSaveBook}>Save</button>
        </div>
      </div>
  );
}

export default CreateBook;