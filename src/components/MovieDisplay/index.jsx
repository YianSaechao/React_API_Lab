import React from 'react'

const MovieDisplay = ({movie}) => {

    const loaded = () =>{

        return (
            <>
                <h1>The MovieDisplay Component</h1>
                <h2>{movie.Title}</h2>
                <h3>{movie.Genre}</h3>
                <img src={movie.Poster} alt={movie.Title} />   
                <h3>{movie.Year}</h3> 
            </>
            
          );
      }
    
    const loading = () =>{
        return <h1>No Movie to Display</h1>;
    };
    
    return movie ? loaded() : loading();   
}
  
  
export default MovieDisplay;