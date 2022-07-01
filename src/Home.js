import SideMenu from "./components/Sidemenu"
import './components/Style.css';
import CheckToken from "./ConnectApi/CheckToken";

const Home=()=>{
    CheckToken()
    return(
        <div>
            <SideMenu/>
        </div>
    )
}

export default Home