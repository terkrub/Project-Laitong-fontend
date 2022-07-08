import Button from "react-bootstrap/Button";

const Orders =()=>{
    return(
        <>
            <img className="Icon" src={require("../../../img/cart.png")}/>
            <b style={{padding:"10px"}}>Orders</b>
            <Button variant="primary">View Orders</Button>
        </>
    )
}

export default Orders