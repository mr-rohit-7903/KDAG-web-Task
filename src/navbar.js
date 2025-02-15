import kdag from "./assets/KDAGLogo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={kdag}/>
            <ul className="nav-links">
                <a href="">Discussion</a>
                <a href="">New post</a>
                <a href="">Profile</a>
            </ul>
        </nav>
    );
}
export default Navbar;