import React from 'react';
import Match from './Match';

function ImportFromFileBodyComponent({ setMatches }) {
    let fileReader;

    const handleFileRead = (e) => {
        const rawContent = JSON.parse(fileReader.result);
        const parsedContent = rawContent.map(matchData => new Match(matchData));
        setMatches(parsedContent);
    }

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    }

    return (
        <div>
            <input type='file'
                   id='file'
                   onChange={e => handleFileChosen(e.target.files[0])}
            />
        </div>
    );
}

export default ImportFromFileBodyComponent;