import React, { useState } from 'react';
import RateNCommentForm from './RateNCommentForm';

const RateCardComponent = (props) => {
    const [seeState, setSeeState] = useState(false);
    const [commentState, setCommentState] = useState(false);
    const {name, image, rating, synopsis, comments} = props.movie;

    const allcomments = comments.map(comment => <div>
        <p style={{color:"#cc7351"}}>{comment.user}</p><small style={{color:"#eccc68"}}>Rating: {comment.rating}</small>
        <p>{comment.comment}</p>
    </div>);

    const seeMore = () => {
        setSeeState(true);
    };

    const seeLess = () => {
        setSeeState(false);
    };

    const handleCommenting = () => {
        setCommentState(commentState => !commentState);
    };

    return (
        <div className="d-flex mb-3 align-items-center" style={{borderStyle:"solid",borderColor:"#EA2027",boxShadow:"0 10px 16px 0 rgba(255,0,0,0.2),0 6px 20px 0 rgba(255,0,0,0.19)" }}>
            <div style={{width:"300px"}}>
                <div className="p-2">
                    <img className="rate-image" src={image} alt={name}/>
                </div>
                <div className="p-2" >
                    <p style={{color:"#EA2027"}}>{name}</p>
                    <p style={{color:"#eccc68"}}>Avg. Rating: {rating}</p>
                </div>
            </div>
            <div className="p-2 mr-5">
                <button className="btn btn-outline-warning ml-5" onClick={handleCommenting}>
                    {
                        commentState?<span>Close comment box</span>:<span>Write a Comment</span>
                    }
                </button>
            </div>
            <div className="p-2 ml-5" style={{width:"400px"}}>
                {
                    commentState?<RateNCommentForm />:<span><h4>Synopsis:</h4>{synopsis}</span>
                }
            </div>
            <div className="p-2 ml-auto comments">
                <p>
                    <strong>Comments</strong>
                    {
                        seeState && <span className="btn btn-outline-warning ml-5" onClick={seeLess}>See Less</span>
                    }
                </p>
                <div>
                    {seeState ? <span>{allcomments}</span> : <span><p style={{color:"#cc7351"}}>{comments[0].user}</p><small style={{color:"#eccc68"}}>Rating: {comments[0].rating}</small>
                        <p>{comments[0].comment}</p><p style={{cursor:"pointer"}} onClick={seeMore}>..See more comments</p></span>}
                </div>                
            </div>
        </div>
    );
};

export default RateCardComponent;