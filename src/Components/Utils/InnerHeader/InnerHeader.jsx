import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const InnerHeader = ({size}) => {
  
  const {id} = useParams()
 
  return (
    <div className="inner-header">
      <Link className={parseInt(id) === 1 ? "active" : "inner-items"} to='/sizes/1'>XS</Link>
      <Link className={parseInt(id) === 2 ? "active" : "inner-items"} to='/sizes/2'>S</Link>
      <Link className={parseInt(id) === 3 ? "active" : "inner-items"} to='/sizes/3'>M</Link>
      <Link className={parseInt(id) === 4 ? "active" : "inner-items"} to='/sizes/4'>L</Link>
      <Link className={parseInt(id) === 5 ? "active" : "inner-items"} to='/sizes/5'>XL</Link>
    </div>
  );
};

export default InnerHeader;
