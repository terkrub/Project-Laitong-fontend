import Card from "react-bootstrap/Card";

const TotalProducts=()=>{
    return(
        <Card style={{textAlign:"center"}}>
            <Card.Body>
                <img className="Icon" src={require("../../../img/product.webp")}/>
                <Card.Title>Total products</Card.Title>
                <Card.Text>
                    123$
                </Card.Text>
            </Card.Body>
        </Card>
    )

}

export default TotalProducts