import Card from "react-bootstrap/Card";
import "./CSS/Icon.css"

const TotalIncome=()=>{
    return(
        <Card style={{textAlign:"center"}}>
            <Card.Body>
                <img className="Icon" src={require("../../../img/income.png")}/>
                <Card.Title>Total income</Card.Title>
                <Card.Text>

                    123$
                </Card.Text>
            </Card.Body>
        </Card>
    )

}

export default TotalIncome