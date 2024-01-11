import './App.css';
import { useState } from 'react';
import Start from './Start';
import LikeList from './LikeList';

function App() {
  const [matches, setMatches] = useState(null);

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
          <p>
            Note that due to privacy, Hinge is only able to release data on your own actions
            (i.e., likes, messages).
            Because of this, we're currently only displaying likes that you've sent.
            Your dataset also includes profiles that liked you first and profiles you disliked,
            but we don't have any information about those profiles.
            If you want to access your complete dataset, click "Export to CSV".
          </p>
        </div>
        <div className='content'>
          <h1>Your Likes</h1>
          <LikeList matches={matches} />
        </div>
      </div>
    );
  }
}

export default App;