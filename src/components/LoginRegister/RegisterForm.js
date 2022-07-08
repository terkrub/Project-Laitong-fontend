import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import SubmitRegister from "../../ConnectApi/SubmitRegister";

const RegisterForm=()=>{
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [cfPassword, setCfPassword] = useState("")
    const [branch, setBranch] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if (username=== "" || password=== "" || cfPassword === "" || branch === "โปรดเลือกสาขา" || branch ===""){
            alert("Please fill all information")
            return
        }
        else if (password !== cfPassword){
            alert("Password and Confirm Password does not match")
            return
        }

        SubmitRegister(username,password,branch)
    }
    return(
        <Form onSubmit={handleSubmit}>
            <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
            >
                <Form.Control name="username" type="text" placeholder="Username" onChange={event => setUsername(event.target.value)}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Confirm Password" >
                <Form.Control type="password" placeholder="Confirm Password" onChange={event => setCfPassword(event.target.value)}/>
            </FloatingLabel>

            <Form.Select aria-label="Default select example" className="mt-3" onChange={event =>setBranch(event.target.value)}>
                <option>โปรดเลือกสาขา</option>
                <option value="test">ทดสอบสาขา</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <div className="register-btn">
                <Button variant="primary" id='login-btn' type="submit">สมัครสมาชิค</Button>{' '}
            </div>
        </Form>
    )
}

export default RegisterForm