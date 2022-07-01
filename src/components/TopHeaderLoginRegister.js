
const TopHeader = ()=>{
    return(
        <header className="top-header-SignPage">
            <img className="logoLogin" src={require('./img/logo-removebg.png')}/>
            <b className="brandNameLogin">บ้านลายทอง</b>
            <a href="/" className="menu-btn">Login</a>
            <a href="/register" className="menu-btn">Register</a>

        </header>
    )
}

export default TopHeader;