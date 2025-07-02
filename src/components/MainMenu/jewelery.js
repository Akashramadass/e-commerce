import { useEffect, useState } from "react";
import './mainMenu.css'
import Nav from "./nav";
import { useNavigate } from "react-router-dom";



function Jewl() {
  const [category, setCategory] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setCategory(data))
  }, []);

  const getIdData = (a) => {
    navigate(`/prodDetails/${a}`);
  }

  

  return (
   <>
   <Nav/>
    <div className="d-flex justify-content-center align-items-center section" style={{ minHeight: "80vh" }}>
      <div className="row m-5 w-100">
        {category.map((data) => (
          <div className="col-md-3 mb-4"onClick={() => getIdData(data.id)}>
            <div className="card h-100 text-center p-3 category-card">
            <img
              src={data.image}
              alt={data.title}
              className="img-fuild mx-auto"
              style={{ maxHeight:"350px",maxWidth:"200px", objectFit:"contain"}}
              />
              <div><strong>Product ID:</strong>{data.id}</div>
              <div><strong>Product Price:</strong>{data.price}</div>
              {/* <div>{data.description}</div>
              <div>{data.category}</div>
              <div>{data.rating.rate}</div>
              <div>{data.rating.count}</div>
               */}
              
              <h5  className="card-title text-capitalize">{}</h5>
         
            </div>
             
          </div>
        ))}
      </div>
    </div>
</>
  );
}

export default Jewl;