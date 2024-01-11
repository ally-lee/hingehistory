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
        ["Match Type", "Count"],
        ["Like and Match", likeAndMatch],
        ["Like", like],
        ["Match", match],
        ["Block", block]
    ];
      
    const options = {
        title: "Breakdown of Match Types",
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