import React from 'react';

function Header({ matches, setMatches }) {
    const reset = () => setMatches(null);
    const download = () => {
        const titleKeys = Object.keys(matches[0]);
        const refinedData = [];
        refinedData.push(titleKeys);
        matches.forEach(match => {
            refinedData.push(Object.values(match).map(value => JSON.stringify(value)))
        });
        let csvContent = '';
        refinedData.forEach(row => {
            csvContent += row.join('\t') + '\n'
        });
        console.log(csvContent);
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' });
        const objUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', objUrl);
        link.setAttribute('download', 'matches.tsv');
        link.click();
    }

    return (
        <div className='header'>
            <button onClick={reset}>Start Over</button>
            <button onClick={download}>Export Data</button>
        </div>
    );
}

export default Header;