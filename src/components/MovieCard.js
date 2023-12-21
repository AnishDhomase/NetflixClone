import "./MovieCard.css"


function MovieCard({id=2}){
    return (
        <img src={require(`./images/card-${id}.jpg`)} className="card"/>
    );
}

export default MovieCard;