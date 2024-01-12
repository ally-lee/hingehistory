import React from 'react';

function Form({ filter, setFilter, sort, setSort }) {
    const handleFilterClick = (event) => setFilter(event.target.value);
    const resetFilter = () => setFilter(null);
    const handleSortClick = (event) => setSort(event.target.value);

    return (
        <form>
            <strong>Filter:</strong>
            <label className={filter === 'match' ? 'selected-option' : ''}>
                <input type='radio' name='filter' value='match' onClick={handleFilterClick} />
                Matches
            </label>
            <label className={filter === 'no-match' ? 'selected-option' : ''}>
                <input type='radio' name='filter' value='no-match' onClick={handleFilterClick} />
                Non-matches
            </label>
            <label className={filter === 'we-met' ? 'selected-option' : ''}>
                <input type='radio' name='filter' value='we-met' onClick={handleFilterClick} />
                We met
            </label>
            <label className={filter === 'my-type' ? 'selected-option' : ''}>
                <input type='radio' name='filter' value='my-type' onClick={handleFilterClick} />
                My type
            </label>
            <label className={filter === 'photo' ? 'selected-option' : ''}>
                <input type='radio' name='filter' value='photo' onClick={handleFilterClick} />
                Photo
            </label>
            <label className={filter === 'video' ? 'selected-option' : ''}>
                <input type='radio' name='filter' value='video' onClick={handleFilterClick} />
                Video
            </label>
            <label className={filter === null ? 'selected-option' : ''}>
                <input type='radio' name='filter' value='no-filter' onClick={resetFilter} />
                No filter
            </label>

            <br />

            <strong>Sort by:</strong>
            <label className={sort === 'desc' ? 'selected-option' : ''}>
                <input type='radio' name='sort' value='desc' onClick={handleSortClick} />
                Newest likes
            </label>
            <label className={sort === 'asc' ? 'selected-option' : ''}>
                <input type='radio' name='sort' value='asc' onClick={handleSortClick} />
                Oldest likes
            </label>

            <br />
            <br />
        </form>
    )
}

export default Form;