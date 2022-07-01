import {useEffect} from "react";


const CheckToken=()=>{
    useEffect(()=>{
        const token = localStorage.getItem('token')
        fetch('http://localhost:3333/authen',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'authorization': 'Bearer '+token
            },
        })
            .then(res => res.json())
            .then(data =>{
                if (data.status === 'Success'){
                    console.log(data)
                }
                else {
                    alert('โปรดลงชื่อเข้าใช้งาน')
                    localStorage.removeItem('token')
                    window.location = '/login'
                }
            })
            .catch((error)=>{
                console.error('Error',error)
            })
    },[])
}

export default CheckToken