
import './components/Main/Style.css';
import CheckToken from "./ConnectApi/CheckToken";
import ContactInfo from "./components/Main/Contact/ContactInfo";
import SideMenu from "./components/Main/SideMenu";


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