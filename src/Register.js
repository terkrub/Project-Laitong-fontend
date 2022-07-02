import TopHeader from "./components/LoginRegister/TopHeaderLoginRegister";
import RegisterForm from "./components/LoginRegister/RegisterForm";

const Register=()=>{
    return(
        <div>
            <TopHeader/>
            <div className="mainBox">
                <div className="box">
                    <h2>REGISTER</h2>
                    <RegisterForm/>
                </div>
            </div>
        </div>
    )
}

export default Register