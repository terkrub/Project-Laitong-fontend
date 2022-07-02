import SideMenu from "./components/Main/Sidemenu"
import './components/Main/Style.css';
import CheckToken from "./ConnectApi/CheckToken";
import ContactInfo from "./components/Main/Contact/ContactInfo";


const Contact=()=>{
    CheckToken()
    return(
        <div className="Body">
            <SideMenu/>
            <ContactInfo/>
        </div>
    )
}

export default Contact