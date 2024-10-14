import React from 'react'
import { useState, useEffect } from 'react'
import Shimmer from '../Components/Shimmer'
import { IoIosAddCircle } from "react-icons/io";
import axios from 'axios'
import { Link } from 'react-router-dom'
import BooksTable from '../Components/patterns/booksTable';
import BooksCards from '../Components/patterns/BooksCards'
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState('table');
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/books")
      .then((response) => {
        setBooks(response.data.data);
        setFilteredList(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("OOPS! Error occured while fetching data.");
        setLoading(true);
      });
  }, []);
  return (
    <div>
      <div className="flex bg-red-400 p-6">
        <h1 className="text-3xl font-bold text-white mt-1 mr-[400px]">Books List</h1>
        <button onClick={() => { setShow('table') }} className="bg-slate-50 border border-rose-900 p-2 m-1 rounded-lg">Table</button>
        <button onClick={() => { setShow('card') }} className="bg-slate-50 border border-rose-900 p-2 m-1 rounded-lg mr-[500px]">Card</button>
        <div className="flex">
          <Link to='/books/create' className="mr-2 text-white mt = [20px]"><IoIosAddCircle className="text-3xl" /></Link>
          <span className="mt-1 text-white text-xl">Add new book</span>
        </div>
      </div>
      <div className="flex h-[37px] border border-rose-900 border-solid w-[330px] rounded-sm m-6 ml-[500px]">
        <input placeholder="Search by title or author" type="text" value={searchText} className="search border-none h-[34px] w-[300px] p-2" onChange={(e) => { setSearchText(e.target.value) }}></input>
        <button className="text-white bg-red-400 w-[30px] h-[35px]" onClick={() => {
          const filteredList = books.filter((res) => {
            const tmatch = res.title.replace(/\s+/g, '').toLowerCase().includes(searchText.replace(/\s+/g, '').toLowerCase());
            const amatch = res.author.replace(/\s+/g, '').toLowerCase().includes(searchText.replace(/\s+/g, '').toLowerCase());
            return tmatch || amatch;
          });
          setFilteredList(filteredList);
        }}><FaSearch className="m-2" /></button>
      </div>
      {loading ? <Shimmer /> : show === 'table' ? <BooksTable books={filteredList} /> : <BooksCards books={filteredList} />}
    </div>
  );
}

export default Home;

