import React from 'react'
import { MdDelete } from "react-icons/md"
import { FaRegEdit } from "react-icons/fa"
import { BsInfoCircleFill } from "react-icons/bs"
import { Link } from 'react-router-dom'

const BooksTable = ({ books }) => {
  return (
    <div>
      <table className="ml-[250px] mt-[30px] w-[60%] border border-rose-900  bg-rose-100/50 mb-8">
        <thead>
          <tr>
            <th className="border border-rose-900 p-4">No</th>
            <th className="border border-rose-900">Title</th>
            <th className="border border-rose-900">Author</th>
            <th className="border border-rose-900">Published Year</th>
            <th className="border border-rose-900">Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book, index) => (
              <tr key={book._id}>
                <td className="border border-rose-900 p-4">{index + 1}</td>
                <td className="border border-rose-900 p-4">{book.title}</td>
                <td className="border border-rose-900 p-4">{book.author}</td>
                <td className="border border-rose-900 p-4">{book.publishedYear}</td>
                <td className="flex flex-wrap space-x-4 p-5 border-b border-b-rose-900">
                  <Link to={`/books/details/${book._id}`}><BsInfoCircleFill className="text-cyan-950" /></Link>
                  <Link to={`/books/edit/${book._id}`}><FaRegEdit className="text-stone-700" /></Link>
                  <Link to={`/books/delete/${book._id}`}><MdDelete className="text-orange-900" /></Link>
                </td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </div>
  );
}

export default BooksTable;