import React from 'react';

function Like({ match }) {
    const className = match.match ? 'like match' : 'like';

    if (match.photo != null & match.comment != null) {
        console.log(match.photo);
        return (
            <div className={className}>
                <img src={match.photo.url} alt='Image not available' />
                <p><strong>Caption:</strong> {match.photo.caption}</p>
                <p><strong>Location: </strong> {match.photo.location}</p>
                <p><strong>Response:</strong> {match.comment}</p>
            </div>
        );
    }
    if (match.photo != null) {
        return (
            <div className={className}>
                <img src={match.photo.url} alt='Image not available' />
                <p><strong>Caption:</strong> {match.photo.caption}</p>
                <p><strong>Location: </strong> {match.photo.location}</p>
            </div>
        );
    } else if (match.prompt != null && match.comment != null) {
        return (
            <div className={className}>
                <p><strong>Question:</strong> {match.prompt.question}</p>
                <p><strong>Answer:</strong> {match.prompt.answer}</p>
                <p><strong>Response:</strong> {match.comment}</p>
            </div>
        );
    } else if (match.prompt != null) {
        return (
            <div className={className}>
                <p><strong>Question:</strong> {match.prompt.question}</p>
                <p><strong>Answer:</strong> {match.prompt.answer}</p>
            </div>
        );
    }
}

export default Like;
