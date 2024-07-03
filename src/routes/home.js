import Navbar from "../components/Navbar/index";
import Home from "../components/Home/index"
import "../components/Home/home.css"


function HomePage(){
    return(
        <div  className="homePage">
            <Navbar/>
            <Home/>
        </div>
        
    )
} 

export default HomePage;