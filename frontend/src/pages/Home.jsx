import React from 'react'
import { useState, useEffect } from 'react'
import Shimmer from '../Components/Shimmer'
import { IoIosAddCircle } from "react-icons/io";
import axios from 'axios'
import { Link } from 'react-router-dom'
import BooksTable from '../Components/patterns/booksTable';
import BooksCards from '../Components/patterns/BooksCards'

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show,setShow] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("OOPS! Error occured while fetching data.");
        setLoading(true);
      });
  }, []);
  return (
    <div>
      <div className = "flex bg-red-400 p-6">
        <h1 className = "text-3xl font-bold text-white mt-1 mr-[400px]">Books List</h1>
        <button onClick = {() => {setShow('table')}} className = "bg-slate-50 border border-rose-900 p-2 m-1 rounded-lg">Table</button>
        <button onClick = {() => {setShow('card')}} className = "bg-slate-50 border border-rose-900 p-2 m-1 rounded-lg mr-[500px]">Card</button>
        <div className = "flex">
          <Link to='/books/create' className = "mr-2 text-white mt = [20px]"><IoIosAddCircle className ="text-3xl"/></Link>
          <span className ="mt-1 text-white text-xl">Add new book</span>
        </div>
      </div>
      {loading ? <Shimmer /> : show === 'table' ? <BooksTable books = {books}/> : <BooksCards books = {books}/>}
    </div>
  );
}

export default Home;

