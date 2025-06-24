
import { useState } from "react";
import Lay from "../Layout/layout";
import Categories from "../MainMenu/category";
import Elec from "../MainMenu/electronic";
import Jewl from "../MainMenu/jewelery";
import MensWear from "../MainMenu/men'swear";
import WomensWear from "../MainMenu/women'swear";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Details from "../MainMenu/details";
import Allproduct from "../MainMenu/allproduct";



function Routerex(){

 
        return(
            <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lay />}>
          <Route index element ={<Categories />}/>
          <Route path="/electronics" element={<Elec />} />
          <Route path="/jewelery" element={<Jewl />} />
          <Route path="/men's clothing" element={<MensWear/>} />
           <Route path="/prodDetails/:id" element={<Details />} />
          <Route path="/women's clothing" element={<WomensWear/>} />
          <Route path="/products" element={<Allproduct/>}/>
          </Route>
        
      </Routes>
    </BrowserRouter>
    </>
            
 
)
}

export default Routerex;