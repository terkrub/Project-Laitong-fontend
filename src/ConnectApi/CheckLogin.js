
function CheckLogin(username, password){
    let jsonData ={
        username: username,
        password:password
    }

    fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
    })
        .then( res => res.json())
        .then(data => {
            if (data.status === 'Success'){
                localStorage.setItem('token',data.token)
                window.location = '/home'
            }
            else {
                alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
                localStorage.removeItem('token')
            }
        })
        .catch((error)=>{
            console.error('Error',error)
        })
}

export default CheckLogin