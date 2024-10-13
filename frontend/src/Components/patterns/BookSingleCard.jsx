import React from 'react'
import { Link } from 'react-router-dom'
import { FaBook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Shimmer from '../Shimmer'
import { MdDelete } from "react-icons/md"
import { FaRegEdit } from "react-icons/fa"
import { BsInfoCircleFill } from "react-icons/bs"
import { FaEye } from "react-icons/fa";
import {useState} from "react"
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal,setShowModal] = useState(false);
  return (
    <div>
      <div key={book._id} className="border border-rose-900 p-4 m-4 w-[350px] shadow-sm rounded-md hover:shadow-lg hover:bg-rose-100/50">
        <div>
          <h2 className="text-gray-400 text-sm m-2">{book._id}</h2>
          <div className="flex flex-wrap m-2">
            <div className="mt-2 mr-2 text-xl text-red-400"><FaBook /></div>
            <div><h2 className="text-lg font-bold ">{book.title}</h2></div>
          </div>
          <div className="flex flex-wrap m-2">
            <div className="mt-1 mr-2 text-xl text-red-400"><CgProfile /></div>
            <div><h3 className="text-base">{book.author}</h3></div>
          </div>
          <h3 className='m-2 text-sm'>{book.publishedYear}</h3>
        </div>
        <div className="flex">
          <FaEye className="m-2 text-xl cursor-pointer" onClick={()=>setShowModal(true)}/>
          <Link className="m-2 text-lg" to={`/books/details/${book._id}`}><BsInfoCircleFill className="text-cyan-950" /></Link>
          <Link className="m-2 text-lg" to={`/books/edit/${book._id}`}><FaRegEdit className="text-stone-700" /></Link>
          <Link className="m-2 text-lg" to={`/books/delete/${book._id}`}><MdDelete className="text-orange-900" /></Link>
        </div>
      </div>
      {
        showModal && <BookModal book = {book} onClose = {() => setShowModal(false)}/>
      }
    </div>
  );
}

export default BookSingleCard;