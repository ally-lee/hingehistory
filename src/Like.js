import React from 'react';

function Like({ match }) {
    const className = match.match ? 'like match' : 'like';
    const content = []
    const text = []

    if (match.promptPoll != null) {
        const options = [];
        for (let i = 0; i < match.promptPoll.options.length; i++) {
            options.push(<li key={i} className={i===match.promptPoll.selectedOptionIndex?'selected-option':''}>{match.promptPoll.options[i]}</li>);
        }
        text.push(<p key='poll'><strong>Poll:</strong></p>)
        text.push(<ul key='options'>{options}</ul>);
    } else if (match.video != null) {
        content.push(<video key='video' className='media' src={match.video.url} controls />);
        if (match.video.caption) {
            text.push(<p key='caption'><strong>Caption:</strong> {match.video.caption}</p>);
        }
        if (match.video.location) {
            text.push(<p key='location'><strong>Location: </strong> {match.video.location}</p>);
        }
    } else if (match.photo != null) {
        content.push(<img key='image' className='media' src={match.photo.url} />);
        if (match.photo.caption) {
            text.push(<p key='caption'><strong>Caption:</strong> {match.photo.caption}</p>);
        }
        if (match.photo.location) {
            text.push(<p key='location'><strong>Location: </strong> {match.photo.location}</p>);
        }
    } else if (match.prompt != null) {
        text.push(<p key='question'><strong>Question:</strong> {match.prompt.question}</p>);
        text.push(<p key='answer'><strong>Answer:</strong> {match.prompt.answer}</p>);
    } else if (match.voicePrompt != null) {
        content.push(<p key='question' className='text'><strong>Question:</strong> {match.voicePrompt.question}</p>);
        content.push(<audio className='media' src={match.voicePrompt.url} controls />);
    }

    if (match.comment != null) {
        text.push(<p key='comment'><strong>Response:</strong> {match.comment}</p>)
    }

    const dateAndTime = match.like.split(' ');
    text.push(<p key='date'><strong>Date:</strong> {dateAndTime[0]}</p>);
    text.push(<p key='time'><strong>Time:</strong> {dateAndTime[1]}</p>);

    content.push(<div key='text' className='text'>{text}</div>);

    return <div className={className}>{content}</div>;
}

export default Like;
