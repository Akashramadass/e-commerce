import { useEffect, useState } from "react";
import './mainMenu.css';
import { Link,useParams } from "react-router-dom";
import Allproduct from "./allproduct";


function Details() {
  const [category, setCategory] = useState({});
const { id } = useParams();
console.log("idvalue",id);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setCategory(data))
     
  }, []);

  return (
   <>
    <div> <Link to="/products">All Prducts</Link></div>
    <div className="d-flex justify-content-center align-items-center section" style={{ minHeight: "80vh" }}>
      <div className="row m-5 w-100">
       
      
          <div className="col-md-3 mb-4">
            <div className="card h-100 text-center p-3 category-card">
  
            <img
              src={category.image}
              alt={category.title}
              className="img-fuild mx-auto"
              style={{ maxHeight:"350px",maxWidth:"200px", objectFit:"contain"}}
              />
             
               <div><strong>Categories:</strong>{category.category}</div>
               <div><strong>Description:</strong>{category.description}</div>
          
             
              
               
              <h5  className="card-title text-capitalize">{}</h5>
         
            </div>
 
          </div>
         
     
       
      </div>
    </div>
</>
  );
}

export default Details;