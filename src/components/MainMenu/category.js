import React, { useEffect, useState } from "react";
import './mainMenu.css'
import men from '../../Assests/men.jpeg'
import women from '../../Assests/women.jpeg'
import electronic from '../../Assests/elec.jpeg'
import daimond from '../../Assests/daimond.jpeg'
import { Link } from "react-router-dom";





function Categories() {
   const [category, setCategory] = useState([]);


    const categoriesImages={
      "electronics": electronic,
      "jewelery": daimond,   
      "men's clothing" : men,
      "women's clothing" : women
    };

    useEffect(() => {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => setCategory(data))
    }, []);

  return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
          {category.map((data) => (
            <Link to={data}>
            <div className="container">
            <div className="row">
              <div className="col">
                <img 
                  src={categoriesImages[data]} 
                  alt={data}
                  className="card-img-top img-fluid mb-3"
                  style={{ height: "180px", objectFit: "contain" }}
                />
                <h5 className="card-title text-capitalize">{data}</h5>

              </div>

                  </div>
            </div>
            </Link>    
              
            
          ))}
        </div>
    );
  }

export default Categories;