import React, { useState } from 'react';

const CardComponent = (movie) => {
    const MAX_LENGTH = 45;
    const {id, name, image, rating, comments} = movie.movie;
    const [readState, setReadState] = useState(false); 
    const readMore = () => {
        setReadState(true);
    };
    const readLess = () => {
        setReadState(false);
    };
    return (
        <div id={`card-${id}`} className="custom-card">
            <div className="card-header">
                <img className="image " src={image} alt={name+"-poster"}/>
            </div>
            <div className="card-body">
                <h3>{name}</h3>
                <p style={{color:"#eccc68"}}>{rating}</p>
                <small>Top Comment:</small>
                <div>
                    <p>{!readState ? <span>{`${comments[0].comment.substring(0, MAX_LENGTH)}...`}<span onClick={readMore} className="text-change">read more</span></span> :
                        <span>{`${comments[0].comment}...`}<span onClick={readLess} className="text-change">read less</span></span>}</p>
                    <p>- {comments[0].user}</p>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
