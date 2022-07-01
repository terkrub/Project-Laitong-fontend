import Button from 'react-bootstrap/Button';

const SideMenu=()=>{
    const Logout=()=>{
        localStorage.removeItem('token')
        window.location = "/login"
    }
    return(
        <div>
            <div className="SideMenu">
                <div className="Menu">
                    <a href="#" className="Menu-btn">สั่งซื้อสินค้า</a>
                    <a href="#" className="Menu-btn">ประวัติการสั่งซื้อ</a>
                    <a href="#" className="Menu-btn">ติดต่อ</a>
                    <Button variant="danger" onClick={Logout}>Logout</Button>{' '}

                </div>
            </div>
            <div className="SideLogo">
                <img className="logo-topHeader" src={require('./img/logo-removebg.png')}/>
                <p className="brandName">บ้านลายทอง</p>
            </div>

        </div>

    )
}

export default SideMenu