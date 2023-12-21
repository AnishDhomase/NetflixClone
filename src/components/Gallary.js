import "./Gallary.css"
import MovieCard from "./MovieCard"

function Gallary({title}){
    return (
        <section>
            <h3>{title}</h3>
            <div className="cardHolder">
                <MovieCard id="1"/>
                <MovieCard id="2"/>
                <MovieCard id="3"/>
                <MovieCard id="4"/>
            </div>
        </section>
    );
}

export default Gallary;