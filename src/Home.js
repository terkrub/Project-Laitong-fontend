import SideMenu from "./components/Main/SideMenu"
import './components/Main/Style.css';
import CheckToken from "./ConnectApi/CheckToken";
import Product from "./components/Main/Product/Product";


const Home=()=>{
    CheckToken()
    return(
        <div className="Body">
            <SideMenu/>
            <Product/>
        </div>
    )
}

export default Home