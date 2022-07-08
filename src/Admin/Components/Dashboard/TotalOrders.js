import Card from "react-bootstrap/Card";

const TotalOrders=()=>{
    return(
        <Card style={{textAlign:"center"}}>
            <Card.Body>
                <img className="Icon" src={require("../../../img/cart.png")}/>
                <Card.Title>Total Orders</Card.Title>
                <Card.Text>
                    123$
                </Card.Text>
            </Card.Body>
        </Card>
    )

}

export default TotalOrders