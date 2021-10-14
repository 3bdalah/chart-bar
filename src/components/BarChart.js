import React, {
    useEffect,
    useState
} from 'react'
import {
    Bar
} from 'react-chartjs-2';
// import  axios  from 'axios';

import dataChart from '../Data.json';
import randomColor from 'random-color';

const BarChart = () => {
    // Created Random color ;
    randomColor([0.6, 0.95]);
    // Created state chart Data;
    let [chartData, setChartData] = useState({});
    let [labelsBar, setLabelBar] = useState([]);

    // Created Structure All Quarters to store data inside
    let Q1 = new Map(),
        Q2 = new Map(),
        Q3 = new Map(),
        Q4 = new Map(),
        catgry = new Map(),
        maxPoints = 0;

    dataChart.goals.forEach(({
        difficulty_points,
        category,
        timestamps
    }) => {

        maxPoints += difficulty_points;
        // get month number
        let monthTimestamps = new Date(),
            month = monthTimestamps.getMonth(timestamps);
        console.log('month', month);
        //  to checked category 
        catgry.set(category, []);

        if (month === 0 || month === 1 || month === 2) {
            Q1.has(category) ? Q1.set(category, {
                    points: (Q1.get(category).points + difficulty_points),
                    title: category,
                    color: '#693D3D'
                }) :
                Q1.set(category, {
                    points: difficulty_points,
                    title: category,
                    color: '#693D3D'
                });

        } else if (month === 3 || month === 4 || month === 5) {
            Q2.has(category) ? Q2.set(category, {
                    points: (Q2.get(category).points + difficulty_points),
                    title: category,
                    color: '#693D3D'
                }) :
                Q2.set(category, {
                    points: difficulty_points,
                    title: category,
                    color: '#896D6D'
                });

        } else if (month === 6 || month === 7 || month === 8) {
            Q3.has(category) ? Q3.set(category, {
                points: (Q3.get(category).points + difficulty_points),
                title: category,
                color: '#693D3D'
            }) : Q3.set(category, {
                points: difficulty_points,
                title: category,
                color: '#595D5D'
            });

        } else if (month === 9 || month === 10 || month === 11) {
            Q4.has(category) ? Q4.set(category, {
                    points: (Q4.get(category).points + difficulty_points),
                    title: category,
                    color: '#693D3D'
                }) :
                Q4.set(category, {
                    points: difficulty_points,
                    title: category,
                    color: '#693D3D'
                });

        }

    });


    catgry.forEach((key, value) => {
        let textCategory = value;
        [Q1, Q2, Q3, Q4].forEach((indexQuarter, valueQuarter) => {
            if (!indexQuarter.has(textCategory)) {
                indexQuarter.set(textCategory, {
                    points: 0
                })
            }
        });
    });


    catgry.forEach((indexCategory, valueCategory) => {
        [Q1, Q2, Q3, Q4].forEach((valueQuarter, keyQuarter) => {
            indexCategory.push(valueQuarter.get(valueCategory).points);
        });

    });

    let FuckData = [],
        maxPoint = 0;
    catgry.forEach((value, key) => {
        let color = randomColor();
        maxPoint += Math.max(...value);
        FuckData.push({
            label: key,
            data: value,
            backgroundColor: color.hexString(),
            borderWidth: 0,
            borderColor: 'transparent',
            barThickness: 35
        });

    });
    let maxPointPersent = (maxPoint % 5);
    maxPoint += (maxPointPersent + 1)
    console.log('fuckken max points', maxPoint);
    const pushNewLabel = () => {
        labelsBar.push(...FuckData);
    }
    const chart = () => {
        setChartData({
            labels: ['1st', '2nd', '3rd', '4th'],
            datasets: labelsBar,
        });

    }

    useEffect(() => {

        // let baseURL = "https://616c358e-9fbe-45aa-889e-0f4f053d7645.mock.pstmn.io/goals";

        // http://164.90.188.52:8000/goals

        // let baseURL = "https://mockzz.herokuapp.com/goals"; 
        // const fetchData = async() => {
        //        const data = await axios.get(baseURL);
        //         console.log('inside fetch',data);
        //         // setGoals('spreed data',data.data);

        // }
        // fetchData();
        pushNewLabel();
        chart();
    }, []);

    //  to get max defficult points value graph 
    maxPoints = ((maxPoints - (maxPoints % 10)) + 10);
    maxPoints = maxPoints.toFixed(0);
    console.log('max', maxPoints);
    return (

        <>
        <div className = "chart-bar" >
        <Bar data = {
            chartData
        }
        options = {
            {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Quartar',
                            font: {
                                weight: 'bold'
                            },
                            color: '#777',
                        },
                        stacked: true,
                        grid: {
                            display: false
                        },
                        categorySpacing: 0,


                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Points',
                            font: {
                                weight: 'bold'
                            },
                            color: '#888',

                        },

                        stacked: true,
                        grid: {
                            display: false
                        },
                        beginAtZero: true, // minimum value will be 0.
                        min: 0,
                        max: maxPoint + 5,
                        stepSize: 25, // 1 - 2 - 3 ...


                    }
                }
            }
        }
        />

        </div> 
        </>
    );
};

export default BarChart;