import React, { useState } from 'react';
import PieChart from './PieChart';
import heart from './heart.png';
import Form from './Form';
import LikeList from './LikeList';

function Content({ matches }) {
    const [sort, setSort] = useState('desc');
    const [filter, setFilter] = useState(null);
    const [hideForm, setHideForm] = useState(false);
    const toggleFormVisibility = () => {
        setHideForm(!hideForm);
    }    

    return (
        <div className='content'>
            <PieChart matches={matches} />
            <p className='info'>
                Note that due to privacy, Hinge is only able to release data on your own actions
                (i.e., likes, messages). Because of this, I'm only displaying likes that you've sent.
                Your dataset also includes profiles that liked you first and profiles you disliked,
                but we don't have any information about those profiles.
                If you want to access your complete dataset, click "Export Data".
            </p>
            <div className='likes-header'>
                <h1>Likes You've Sent</h1>
                <p>
                    <img src={heart} height='20px' /> = they matched with you.
                    <button onClick={toggleFormVisibility}>Hide/Show Options</button>
                </p>
                {hideForm ? null : <Form filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />}
            </div>
            <LikeList matches={matches} filter={filter} sort={sort} />
        </div>
    );
}

export default Content;