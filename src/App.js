import './App.css';
import { useState } from 'react';
import Start from './Start';
import Header from './Header';
import Content from './Content';

function App() {
    const [matches, setMatches] = useState(null);
  
    if (!matches) {
        return <Start setMatches={setMatches} />;
    } else {
        return (
            <div>
                <Header matches={matches} setMatches={setMatches} />
                <Content matches={matches} />
            </div>
        );
    }
}

export default App;
