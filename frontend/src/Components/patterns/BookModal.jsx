import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom'
import { FaBook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md"
import { FaRegEdit } from "react-icons/fa"
import { BsInfoCircleFill } from "react-icons/bs"

const BookModal = ({ book, onClose }) => {
  return (
    <div>
      <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center" onClick={onClose}>
        <div onClick={(evt) => { evt.stopPropagation() }} className="border border-rose-900 p-4 m-4 shadow-sm rounded-md bg-white w-[70%]">
          <div>
            <IoIosCloseCircle className = "right-6 top-6 cursor-pointer text-xl text-red-400" onClick = {onClose}/>
            <h2 className="text-gray-400 text-sm m-2">{book._id}</h2>
            <div className="flex flex-wrap m-2">
              <div className="mt-2 mr-2 text-xl text-red-400"><FaBook /></div>
              <div><h2 className="text-lg font-bold ">{book.title}</h2></div>
            </div>
            <div className="flex flex-wrap m-2">
              <div className="mt-1 mr-2 text-xl text-red-400"><CgProfile /></div>
              <div><h3 className="text-base">{book.author}</h3></div>
            </div>
            <h2 className='m-2 text-md'>{book.genre}</h2>
            <h3 className='m-2 text-sm'>{book.publishedYear}</h3>
          </div>
          <div className="flex">
            <Link className="m-2 text-lg" to={`/books/details/${book._id}`}><BsInfoCircleFill className="text-cyan-950" /></Link>
            <Link className="m-2 text-lg" to={`/books/edit/${book._id}`}><FaRegEdit className="text-stone-700" /></Link>
            <Link className="m-2 text-lg" to={`/books/delete/${book._id}`}><MdDelete className="text-orange-900" /></Link>
          </div>
          <p className='mt-4 font-bold'>Description</p>
          <p className='my-2'>
            {book.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookModal;