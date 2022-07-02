import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TopicTriangleCard() {
    return (
        <Card style={{ width: '100%', textAlign:"center" }}>
            <Card.Img variant="top" src={require('../../../img/logo.jpg')}/>
            <Card.Body>
                <Card.Title>สามเหลี่ยม</Card.Title>
                <Button variant="primary">ดูสินค้า</Button>
            </Card.Body>
        </Card>
    );
}

export default TopicTriangleCard;