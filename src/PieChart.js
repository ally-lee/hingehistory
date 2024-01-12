import React from 'react';
import { Chart } from 'react-google-charts';

function PieChart({ matches }) {
    let likeAndMatch = 0;
    let like = 0;
    let match = 0;
    let block = 0;

    for (let i = 0; i < matches.length; i++) {
        if (matches[i].like != null && matches[i].match != null) {
            likeAndMatch++;
        } else if (matches[i].like != null) {
            like++;
        } else if (matches[i].match != null) {
            match++;
        } else {
            block++;
        }
    }

    const data = [
        ["Interaction Type", "Count"],
        ["You liked them and they matched with you", likeAndMatch],
        ["You liked them but they didn't match with you", like],
        ["They liked you and you matched with them", match],
        ["You didn't like them", block]
    ];
      
    const options = {
        title: "Breakdown of Profile Interactions",
        colors: ['pink', 'purple', 'teal', 'coral']
    };
      
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    );
    
}

export default PieChart;