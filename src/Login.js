import TopHeader from "./components/TopHeaderLoginRegister";
import './components/loginRegisterStyle.css'
import LoginForm from "./components/LoginForm";

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