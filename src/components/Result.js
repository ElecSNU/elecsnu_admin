import React, { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LabelList,
    PieChart,
    Pie,
} from 'recharts';
import useFirestore from '../hooks/useFirestore';

import './Results.css';

const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    const radius = 25;

    return (
        <g>
            <circle
                cx={x + width / 2}
                cy={y - radius}
                r={radius}
                fill='#8884d8'
            />
            <text
                x={x + width / 2}
                y={y - radius}
                fill='#fff'
                textAnchor='middle'
                dominantBaseline='middle'
            >
                {value}
            </text>
        </g>
    );
};

const Results = (props) => {
    const [electionName, setElectionName] = useState('');
    const [winner, setWinner] = useState('');
    const [data, setData] = useState([]);

    const electionDocs = useFirestore('newelections').docs;

    const loadData = () => {
        let electionId = props.electionid;
        if (electionDocs !== {}) {
            let electionDetails = {};
            electionDocs.forEach((e) => {
                if (e.id === electionId) {
                    setElectionName(e.election_name);
                    electionDetails = e;
                    return;
                }
            });

            let voteData = {};

            if (Object.keys(electionDetails).length === 0) {
                console.log('okay');
            } else {
                electionDetails.election_candidates.forEach(
                    (c, i) => {
                        voteData[i] = {
                            name: c.candidate_name,
                            votes: 0,
                        };
                    }
                );

                electionDetails.election_votes.forEach(
                    (vote) => {
                        voteData[vote.candidate_chosen][
                            'votes'
                        ] =
                            voteData[vote.candidate_chosen][
                                'votes'
                            ] + 1;
                    }
                );

                // Setting Winner
                let finalVotes = Object.values(voteData);
                finalVotes.sort(function (a, b) {
                    var keyA = a['votes'],
                        keyB = b['votes'];
                    // Compare the 2 dates
                    if (keyA > keyB) return -1;
                    if (keyA < keyB) return 1;
                    return 0;
                });
                setWinner(finalVotes[0]['name']);

                setData(Object.values(voteData));

                // calculating pie value
                setPieData([
                    {
                        name: 'Voted',
                        value:
                            electionDetails.voters.length,
                    },
                    {
                        name: "Didn't vote",
                        value:
                            electionDetails
                                .election_eligible_voters
                                .length -
                            electionDetails.voters.length,
                    },
                ]);
            }
        }
    };

    const [pieData, setPieData] = useState([
        { name: 'Voted', value: 400 },
        { name: "Didn't vote", value: 300 },
    ]);

    useEffect(() => {
        if (electionDocs) loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [electionDocs]);

    return (
        <div id='results'>
            <div className='results-container border-radius-15 box-shadow background-light-translucent'>
                <div
                    className='cross'
                    onClick={() =>
                        props.setShowResults(false)
                    }
                >
                    x
                </div>
                <div className='results-heading heading-text background-1-translucent border-radius-15 foreground-light center-text'>
                    Results for {electionName}
                </div>

                <div className='results-heading heading-text foreground-accent2 center-text'>
                    The winner till now is
                    <span
                        className='foreground-accent1 capital-text winner'
                        style={{ marginLeft: '1rem' }}
                    >
                        {winner}
                    </span>
                </div>

                <div className='chart'>
                    <BarChart
                        width={600}
                        height={300}
                        data={data}
                        margin={{
                            top: 75,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey='votes' fill='#d8315b'>
                            <LabelList
                                dataKey='votes'
                                content={
                                    renderCustomizedLabel
                                }
                            />
                        </Bar>
                    </BarChart>
                    <div className='subheading-text foreground-back center-text'>
                        Who got how many votes
                    </div>
                </div>

                <div
                    className='chart'
                    style={{ marginTop: '-5rem' }}
                >
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey='value'
                            isAnimationActive={false}
                            data={pieData}
                            cx={200}
                            cy={200}
                            outerRadius={80}
                            fill='#d8315b'
                            label
                        />
                        <Tooltip />
                    </PieChart>
                    <div
                        className='subheading-text foreground-back center-text'
                        style={{ marginTop: '-5rem' }}
                    >
                        Ratio of voting
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
