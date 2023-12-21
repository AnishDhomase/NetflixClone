import "./Main.css"
import Btn from "./Btn";
import MovieCard from "./MovieCard";


function Main(){
    return (
        <main>
            <div className="BtnContainer">
                <Btn content="Subscribe" icnClass="fa-solid fa-play"/>
                <Btn content="More Info" icnClass="fa-solid fa-circle-info"/>
            </div>
            <h3>We Think You'll Love These</h3>
            <marquee>
                <MovieCard id="1"/>
                <MovieCard id="2"/>
                <MovieCard id="3"/>
                <MovieCard id="4"/>
                <MovieCard id="5"/>
                <MovieCard id="6"/>
                <MovieCard id="7"/>
                <MovieCard id="1"/>
                <MovieCard id="2"/>
                <MovieCard id="3"/>
                <MovieCard id="4"/>
                <MovieCard id="5"/>
                <MovieCard id="6"/>
                <MovieCard id="7"/>
            </marquee>

        </main>
    );
}

export default Main;