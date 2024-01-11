import React from 'react';
import Like from './Like';

function LikeList({ matches, filter, sort }) {
    const sortDesc = (a, b) => {
        if (a.like > b.like) {
            return -1;
        } else if (a.like < b.like) {
            return 1;
        } else {
            return 0;
        }
    }

    const sortAsc = (a, b) => {
        if (a.like < b.like) {
            return -1;
        } else if (a.like > b.like) {
            return 1;
        } else {
            return 0;
        }
    }

    const sortFn = sort === 'desc' ? sortDesc : sortAsc;

    const filterMatches = (match) => {
        if (filter === 'match') {
            return match.match != null;
        } else if (filter === 'no-match') {
            return match.match === null;
        } else if (filter === 'my-type') {
            return match.myType === true;
        } else if (filter === 'we-met') {
            return match.weMet != null;
        } else if (filter === 'photo') {
            return match.photo != null;
        } else if (filter === 'video') {
            return match.video != null || match.videoPrompt != null;
        } else {
            return true;
        }
    }

    return matches.filter(match => match.like != null)
            .filter(filterMatches)
            .toSorted(sortFn)
            .map(match => <Like className='like' key={match.like} match={match} />);
    
}

export default LikeList;