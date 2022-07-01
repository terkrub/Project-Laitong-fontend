
function SubmitRegister(username,password,branch){
    let jsonData ={
        username: username,
        password: password,
        branch: branch
    }

    fetch('http://localhost:3333/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
    })
        .then( res => res.json())
        .then(data => {
            if (data.status === 'Success'){
                alert("สมัครสมาชิคเรียบร้อยโปรดล็อคอิน")
                window.location ='/login'
            }
            if (data.message.includes("Duplicate entry")){
                alert("Username นี้มีคนใช้เเล้วโปรดลองใหม่อีกคร้ง")
            }

        })
        .catch((error)=>{
            console.error('Error',error)
        })
}

export default SubmitRegister