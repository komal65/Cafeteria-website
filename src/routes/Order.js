import Order from "../components/Orders/index";
import Navbar from "../components/Navbar/index";
import "../components/Orders/index.css"

function Orders() {
    return(
        <div className="ord">
        <Navbar/>
        <Order/>
        </div>
    );
}

export default Orders;