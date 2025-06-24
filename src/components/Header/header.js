
import Login from "../Login/login";
import logo from '../../Assests/logo.avif';
import './header.css';

function Header(){
   
        return(
            <>
            <header  className="head">

                <div className="logo-left">
                <img src={logo} alt="logo" />
                </div>

                <div className="head-title">
                <h1>AK SHOP</h1>
                </div>

              

                <div className="login-right">
                <Login/> 
                </div>           
            </header>
            </>
        )
    }   

export default Header;