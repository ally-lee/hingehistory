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

    const sortAsc = (a, b) => -1 * sortDesc(a, b);

    const sortFn = sort === 'desc' ? sortDesc : sortAsc;

    const filterMatches = (match) => {
        switch (filter) {
            case 'match':
                return match.match != null;
            case 'no-match':
                return match.match === null;
            case 'my-type':
                return match.myType === true;
            case 'we-met':
                return match.weMet === 'Yes';
            case 'photo':
                return match.photo != null;
            case 'video':
                return match.video != null || match.videoPrompt != null;
            default:
                return true;
        }
    }

    return matches.filter(match => match.like != null)
            .filter(filterMatches)
            .toSorted(sortFn)
            .map(match => <Like key={match.like} match={match} />);
    
}

export default LikeList;