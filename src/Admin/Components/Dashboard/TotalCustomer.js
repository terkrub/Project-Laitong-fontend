import Card from "react-bootstrap/Card";

const TotalCustomers=()=>{
    return(
        <Card style={{textAlign:"center"}}>
            <Card.Body>
                <img className="Icon" src={require("../../../img/customer.png")}/>
                <Card.Title>Total Customers</Card.Title>
                <Card.Text>
                    123$
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TotalCustomers