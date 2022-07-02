import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopicCircleCard from "./Circle/TopicCircleCard";
import TopicTriangleCard from "./Triangle/TopicTriangleCard";
import TopicOvalCard from "./Oval/TopicOvalCard";
import TopicSquareCard from "./Square/TopicSquareCard";

const Product=()=>{
    return (
        <div className="MainBox">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="3" style={{padding:10}}>
                        <TopicCircleCard/>
                    </Col>
                    <Col xs lg="3" style={{padding:10}}>
                        <TopicTriangleCard/>
                    </Col>
                    <Col xs lg="3" style={{padding:10}}>
                        <TopicOvalCard/>
                    </Col >
                    <Col xs lg="3" style={{padding:10}}>
                        <TopicSquareCard/>
                    </Col>
                    <Col xs lg="3" style={{padding:10}}>
                        <TopicSquareCard/>
                    </Col>

                </Row>
            </Container>
        </div>

    );
}

export default Product