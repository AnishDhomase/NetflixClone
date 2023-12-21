import "./Navbar.css"

function Navbar(){
    return (
        <nav>
            <div className="left">
                <span className="logo"><img src={require("./images/netflix.png")}/></span>
                <span className="secs">Home</span>
                <span className="secs">Movies</span>
                <span className="secs">My List</span>
            </div>
            <div className="right">
                <div className="srch">
                    <input type="text"></input>
                    <i class="fa-solid fa-magnifying-glass q"></i>
                </div>
                <i class="fa-regular fa-bell"></i>
            </div>
        </nav>
    );
}
export default Navbar;