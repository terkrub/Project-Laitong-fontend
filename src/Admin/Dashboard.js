import CheckTokenAdmin from "./ConnectApi/CheckTokenAdmin";
import SideMenuAdmin from "./Components/SideMenuAdmin";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TotalIncome from "./Components/Dashboard/TotalIncome";
import TotalOrders from "./Components/Dashboard/TotalOrders";
import TotalProducts from "./Components/Dashboard/TotalProducts";
import TotalCustomers from "./Components/Dashboard/TotalCustomer";
import Container from "react-bootstrap/Container";
import Orders from "./Components/Dashboard/Orders";


const Dashboard=()=>{
    CheckTokenAdmin()
    return(
        <div className="MainBox">
            <SideMenuAdmin/>
            <Container>
                <Row>
                    <Col>
                        <TotalIncome/>
                    </Col>
                    <Col>
                        <TotalOrders/>
                    </Col>
                    <Col>
                        <TotalProducts/>
                    </Col>
                    <Col>
                        <TotalCustomers/>
                    </Col>
                </Row>
                <Row style={{background:"white",marginTop:"20px",marginLeft:"1px",marginRight:"1px"}}>
                    <Col >
                        <Orders/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard