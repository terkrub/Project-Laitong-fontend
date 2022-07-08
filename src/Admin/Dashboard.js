import CheckTokenAdmin from "./ConnectApi/CheckTokenAdmin";
import SideMenuAdmin from "./Components/SideMenuAdmin";


const Dashboard=()=>{
    CheckTokenAdmin()
    return(
        <div className="Body">
            <SideMenuAdmin/>
        </div>
    )
}

export default Dashboard