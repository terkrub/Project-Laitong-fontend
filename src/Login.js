import TopHeader from "./components/LoginRegister/TopHeaderLoginRegister";
import './components/LoginRegister/loginRegisterStyle.css'
import LoginForm from "./components/LoginRegister/LoginForm";

const Login=()=>{

    return(
        <div>
            <TopHeader/>
            <div className="mainBox">
                <div className="box">
                    <h2>LOGIN</h2>
                    <LoginForm/>
                </div>
            </div>
        </div>

    );
}

export default Login