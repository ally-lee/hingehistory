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
  }

  if (!matches) {
    return (
      <Start setMatches={setMatches} />
    );
  } else {
    return (
      <div>
        <div className='pinned-buttons'>
          <button onClick={reset}>Start Over</button>
          <button onClick={download}>Export to CSV</button>
        </div>
        <LikeList matches={matches} />
      </div>
    );
  }
}

export default App;
