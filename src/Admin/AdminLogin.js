import TopHeader from "./Components/Login/TopHeader";
import LoginFormAdmin from "./Components/Login/LoginFormAdmin";

const AdminLogin=()=>{
    return(
        <div>
            <TopHeader/>
            <div className="mainBox">
                <div className="box">
                    <h2>ADMIN LOGIN</h2>
                    <LoginFormAdmin/>
                </div>
            </div>
        </div>

    );
}

export default AdminLogin