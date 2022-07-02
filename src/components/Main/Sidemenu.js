import Button from 'react-bootstrap/Button';


const SideMenu=()=>{
    const Logout=()=>{
        localStorage.removeItem('token')
        window.location = "/login"
    }

    return(
        <div>
            <div className="SideMenu">
                <img className="logo-topHeader" src={require('../img/logo-removebg.png')}/>
                <p className="brandName">บ้านลายทอง</p>
                <div className="Menu">
                    <a href="/home" className="Menu-btn">สั่งซื้อสินค้า</a>
                    <a href="" className="Menu-btn">ประวัติการสั่งซื้อ</a>
                    <a href="/contact" className="Menu-btn">ติดต่อ</a>

                </div>
                <div className="Logout">
                    <Button variant="danger" onClick={Logout}>Logout</Button>{' '}
                </div>
            </div>


        </div>

    )
}

export default SideMenu

/*

<Tab.Container id="Tap" defaultActiveKey="first">
                        <Row>
                            <Col sm={12}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">สั่งซื้อสินค้า</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">ประวัติการสั่งซื้อ</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">ติดต่อ</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <ContactInfo/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <ContactInfo/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <ContactInfo/>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
*/

/*

 */