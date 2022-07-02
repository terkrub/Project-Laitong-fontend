
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import CheckLogin from "../../ConnectApi/CheckLogin";

const LoginForm=()=> {
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    function handleSubmit(e){
        e.preventDefault()
        CheckLogin(username,password)
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                >
                    <Form.Control name="username" type="text" placeholder="Username" onChange={event => setUsername(event.target.value)}/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                </FloatingLabel>

                <div className="login-btn">
                    <Button variant="primary" id='login-btn' type="submit">ล็อคอิน</Button>{' '}
                </div>
            </Form>
        </>
    );
}

export default LoginForm