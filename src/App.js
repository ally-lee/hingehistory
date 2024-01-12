import './App.css';
import { useState } from 'react';
import Start from './Start';
import LikeList from './LikeList';
import Form from './Form';
import PieChart from './PieChart';
import heart from './heart.png';

function App() {
  const [matches, setMatches] = useState(null);
  const [sort, setSort] = useState('desc');
  const [filter, setFilter] = useState(null);

  const reset = () => setMatches(null);
  const download = () => {
    const titleKeys = Object.keys(matches[0]);
    const refinedData = [];
    refinedData.push(titleKeys);
    matches.forEach(match => {
      refinedData.push(Object.values(match))
    });
    let csvContent = '';
    refinedData.forEach(row => {
      csvContent += row.join(',') + '\n'
    });
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
    const objUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', objUrl)
    link.setAttribute('download', 'matches.csv')

    console.log(refinedData);
  }

  if (!matches) {
    return (
      <Start setMatches={setMatches} />
    );
  } else {
    return (
      <div>
        <div className='header'>
          <button onClick={reset}>Start Over</button>
          <button onClick={download}>Export to CSV</button>
        </div>
        <div className='content'>
          <PieChart matches={matches} />
          <p className='info'>
              Note that due to privacy, Hinge is only able to release data on your own actions
              (i.e., likes, messages). Because of this, we're only displaying likes that you've sent.
              Your dataset also includes profiles that liked you first and profiles you disliked,
              but we don't have any information about those profiles.
              If you want to access your complete dataset, click "Export to CSV".
          </p>
          <div className='likes-header'>
            <h1>Likes You've Sent</h1>
            <p><img src={heart} height='20px' /> = they matched with you</p>
            <Form filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
          </div>
          <LikeList matches={matches} filter={filter} sort={sort} />
        </div>
      </div>
    );
  }
}

export default App;
