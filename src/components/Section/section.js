

import './section.css';
import { Outlet } from 'react-router-dom';


function Sections(){
 
        return(
            <>
            <div >
         
               
                <Outlet />
               
                </div>
            
            </>
        )
    }

export default Sections;