import { IoArrowBackCircle } from "react-icons/io5";
import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ destination = '/' }) => {
  return (
    <div>
      <Link to={destination}><IoArrowBackCircle className="text-white text-3xl m-2" /></Link>
    </div>
  );
}

export default BackButton;