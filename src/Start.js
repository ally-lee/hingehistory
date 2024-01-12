import React from 'react';
import ImportFromFileBodyComponent from './ImportFromFileBodyComponent';

function Start({ setMatches }) {
    return (
        <div className='welcome'>
            <div className='content'>
            <h1>Welcome!</h1>
            <h2>
                Upload your "matches.json" file below to view a summary of your Hinge data and details on 
                all of the likes you've sent.
            </h2>
            <p>
                In your Hinge app, go to Settings and scroll down to "Download My Data" to request your data.
                When it's ready, it'll be availabe for 48 hours for you to download from the app.
                You might not receive an email so be sure to check back regularly so you don't miss it.
            </p>
            <ImportFromFileBodyComponent setMatches={setMatches} />
            <p>
                This app runs entirely in your browser so I am not storing or accessing your personal data 
                in any way.
            </p>
            <p>
                Created by: Ally Lee
            </p>
            </div>
        </div>
    );
}

export default Start;