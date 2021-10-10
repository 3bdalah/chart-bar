import React, { useEffect,useState} from 'react'
import { Bar } from 'react-chartjs-2';
// import  axios  from 'axios';

import dataChart from '../Data.json';
import randomColor from 'random-color';
// var randomColor = require('random-color');


const BarChart = () => {
    randomColor([0.6, 0.95]);
    
    // console.log(color.hexString());
    let [chartData,  setChartData] = useState({});
    let [labelsBar,setLabelBar] = useState([]);
    //  Fetch file to return data bar stacked 
    let Q1 = new Map(),
        Q2 = new Map(),
        Q3 = new Map(),
        Q4 = new Map(),
        catgry = new Map();
     dataChart.goals.forEach(({ difficulty_points, category ,month }) => {
        //  to checked category 
        catgry.set(category,[]);

        if (month === "January" || month === "February" || month === "March") {
            Q1.has(category) ? Q1.set(category, {points : ( Q1.get(category).points + difficulty_points),title : category, color : '#693D3D'}) 
                               :  Q1.set(category, {points : difficulty_points,title : category, color:'#693D3D'});
            
        } else if (month === "April" || month === "May" || month === "June") {
            Q2.has(category) ?  Q2.set(category, {points : ( Q2.get(category).points + difficulty_points),title : category, color : '#693D3D'})
                                : Q2.set(category, {points : difficulty_points,title : category, color:'#896D6D'});
            
        } else if (month === "July" || month === "August" || month === "September") {
            Q3.has(category)? Q3.set(category, {points : ( Q3.get(category).points + difficulty_points),title : category, color : '#693D3D'}) :  Q3.set(category, {points : difficulty_points,title : category, color:'#595D5D'});
            
        } else if (month === "October" || month === "November" || month === "December") {
            Q4.has(category) ? Q4.set(category, {points : ( Q4.get(category).points + difficulty_points),title : category, color : '#693D3D'})
                : Q4.set(category, {points : difficulty_points,title : category, color:'#693D3D'});
            
        }
        // return {
        //     difficulty_points,
        //     category,
        //     month
        // }
    });
    // print catrego
    // console.log('cetogry -> ',catgry);

   catgry.forEach((key,value) => {
       let textCategory = value;
       [Q1,Q2,Q3,Q4].forEach((indexQuarter , valueQuarter) => {
           if(!indexQuarter.has(textCategory)){
              indexQuarter.set(textCategory, {points : 0})
           }
            //  console.log('indee', indexQuarter);
       });
   });

    // console.log('\n quratar', Q1,'\n', 'quratar 2','\n',Q2, 'Quratar 3','\n', Q3, 'Quratar 4','\n', Q4);
    
    //  console.log('QTest -> ', Q1.get('community').points);
     

    catgry.forEach((indexCategory, valueCategory) => {
    //    console.log('value category',valueCategory);
       [Q1,Q2,Q3,Q4].forEach((valueQuarter,keyQuarter) => {
                     indexCategory.push(valueQuarter.get(valueCategory).points);
       });
       
    });
    // print category data labels 
    // console.log('category', catgry);    

   let FuckData =[],indexColor=0; 
   catgry.forEach((value, key) => {
       let color = randomColor();
    //   console.log('key -> ',key);
    //   console.log('value -> ',value);
        FuckData.push({   label : key,
          data  : value,
          backgroundColor: color.hexString(),
          borderWidth:0,
          borderColor:'transparent',
          barThickness: 35});
    indexColor++;
   });

//    console.log('fuckken ',FuckData);
   const pushNewLabel = () => {
    //    labelsBar.push({
    //     label: 'moople',
    //     data: [9,1,11,2],
    //     backgroundColor: '#9B51E0',
    //     borderColor: '#6B51E0',
    //     borderWidth: 0,
    //     barThickness: 30
    // })

    labelsBar.push(...FuckData);
   }
    const chart = () => {
        setChartData({
            labels: ['1st', '2nd', '3rd', '4th'],
            datasets:labelsBar,
        });
        // chartData.datasets.push({
        //     label : 'Test To Push',
        //     data : [1,4,6,2],
        //     backgroundColor:colorStore[2],
        //     borderColor:colorStore[2],
        //     borderWidth: 1,
        //     barThickness: 30,
        //     radius: 1,
        //     });
    }
    //   const dataBar1,dataBar2,dataBar3;

    // Test To Push Label Static manual ashtaa!!  
    
    // console.log('Char Data test To Access' , chartData.datasets);



   
    // console.log('data sets -> ',chartData.datasets[0].label);





    // function addData(chartData, label, data) {
    //     chartData.data.labels.push(label);
    //     chartData.data.datasets.forEach((dataset) => {
    //         dataset.data.push(data);
    //     });
    //     chartData.update();
    // }

    // function removeData(chart) {
    //     chart.data.labels.pop();
    //     chart.data.datasets.forEach((dataset) => {
    //         dataset.data.pop();
    //     });
    //     chart.update();
    // }

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

    return (

        <>
        <div className = "chart-bar">
        <Bar  data = {
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
                        max: 25,
                        stepSize: 5, // 1 - 2 - 3 ...


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