import React from 'react';
import ImportFromFileBodyComponent from './ImportFromFileBodyComponent';


function Start({ setMatches }) {
    return (
        <div className='welcome'>
            <h1>Welcome!</h1>
            <h2>Please upload your `matches.json` file below.</h2>
            <p>In your Hinge app, go to Settings and scroll down to "Download My Data" to request your data.</p>
            <p>When it's ready, it'll be availabe for 48 hours for you to download from the app.</p>
            <ImportFromFileBodyComponent setMatches={setMatches} />
        </div>
    );
}

export default Start;