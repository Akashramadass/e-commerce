import Header from "../Header/header";
import Footer from "../Footer/footer";
import Sections from "../Section/section";



function Lay(){
 
        return(
            <>
            <Header />
            <section>
                <Sections/>
            </section>
            
            <Footer />
            </>
           
        )
    }

export default Lay;