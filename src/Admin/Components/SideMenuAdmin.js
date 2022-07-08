import Button from 'react-bootstrap/Button';


const SideMenuAdmin=()=>{
    const Logout=()=>{
        localStorage.removeItem('token')
        window.location = "/login"
    }

    return(
        <div>
            <div className="SideMenu">
                <img className="logo-topHeader" src={require('../../img/logo-removebg.png')}/>
                <p className="brandName">บ้านลายทอง</p>
                <div className="Menu">
                    <a href="/dashboard" className="Menu-btn">Dashboard</a>
                    <a href="/product" className="Menu-btn">Product</a>
                    <a href="/order" className="Menu-btn">Orders</a>
                    <a href="/Customers" className="Menu-btn">Customers</a>

                </div>
                <div className="Logout">
                    <Button variant="danger" onClick={Logout}>Logout</Button>{' '}
                </div>
            </div>


        </div>

    )
}

export default SideMenuAdmin
