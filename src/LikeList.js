import React from 'react';
import Like from './Like';

function LikeList({ matches }) {
    return matches.filter(match => match.like != null).map(match => 
        <Like className='like' key={match.like} match={match} />);
}

export default LikeList;