import {useEffect} from "react";


const CheckTokenAdmin=()=>{
    useEffect(()=>{
        const token = localStorage.getItem('token')
        fetch('http://localhost:3333/admin/authen',{
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
                    alert('You do not have permission to access')
                    window.location = '/home'
                }
            })
            .catch((error)=>{
                console.error('Error',error)
            })
    },[])
}

export default CheckTokenAdmin