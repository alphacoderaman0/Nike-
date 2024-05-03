const Navigation = () => {

    return(
        <nav className="container">
            <div className="logo">
                 <img src="/images/nike.png" alt="Nike" title='Nike' />
            </div>

            <ul>
                <li><a href="/">MENU</a></li>
                <li><a href="/">LOCATION</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">CONTACT</a></li>
            </ul>

            <button className=''>Login</button>
      </nav>
    )
}
export default Navigation;