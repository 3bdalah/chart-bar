import React,{useEffect,useState} from 'react'
import {Bar} from 'react-chartjs-2';
import  axios  from 'axios';
const BarChart = () => {
   const [chartData, setChartData] = useState({});
    
     const charLabelData = [
         [0,3,4,5],
         [1,1,4,5],
         [0,3,2,5],
         [1,1,4,0],   
     ]
  
    const chart = () => {
          setChartData({
            labels: ['1st', '2nd', '3rd', '4th'],
            datasets: [
                {
                    label: 'Craft',
                    data:charLabelData[0],
                    backgroundColor: '#F2994A',
                    borderColor: '#F2994A',
                    borderWidth: 1,
                    barThickness:30
                },
                {
                    label: 'Process',
                    data:charLabelData[1],
                    // backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    backgroundColor:'#F2C94C',
                    borderColor:'#F2C94C',
                    borderWidth:1,
                    // hoverBackgroundColor:'rgba(0,0,0,0.4)',
                    barThickness:30
                }
                ,
                {
                    label: 'People',
                    data:charLabelData[2],
                    // backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    backgroundColor:'#9B51E0',
                    borderColor:'#9B51E0',
                    borderWidth:1,
                    // hoverBackgroundColor:'rgba(0,0,0,0.4)',
                    barThickness:30
                }
                ,
                {
                    label: 'Cummunity',
                    data:charLabelData[3],
                    // backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    backgroundColor:'#BB6BD9',
                    borderColor:'#BB6BD9',
                    borderWidth:1,
                    barThickness:30,
                    // hitRadius:1,
                    // pointRadius:12,
                    // pointStyle:'dash',
                   radius:1,

                    // hoverBackgroundColor:'rgba(0,0,0,0.4)',
                }
            ]
            
        
          })
    }
    //   const dataBar1,dataBar2,dataBar3;

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }

    function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

useEffect(  () => {
    
    // let baseURL = "https://616c358e-9fbe-45aa-889e-0f4f053d7645.mock.pstmn.io/goals";
   
    // http://164.90.188.52:8000/goals
   
    // let baseURL = "http://164.90.188.52:8000"; 
    // const fetchData = async() => {
    //        const data = await axios.get(baseURL);
    //         console.log('inside fetch',data);
    //         // setGoals('spreed data',data.data);
        
    // }
    // fetchData();
   chart();
    
 },[]);

 return (
     
     <>
           <div className="chart-bar">
              
           <Bar 
            // width={1000}
            // className="chart-bar"
            
            data={chartData}
            options={ {
                scales: {
                    x: {
                        // alignToPixels:2,
                        title:{
                            display: true,
                            text:'Quartar',
                            font: {
                                weight:'bold'
                            },
                            color: '#777',
                        },
                        stacked: true,
                        grid:{
                            display:false
                                },
                    //    barPercentage: 0.1,
                       categorySpacing:0,
                       
                       
                    },
                    y: {
                        title:{
                            display: true,
                            text:'Points',
                            font: {
                                weight:'bold'
                            },
                            color: '#888',
                            
                        },
                        
                        stacked: true,
                        grid:{
                            display:false
                        },
                        // labelMaxWidth: 20,
                        beginAtZero: true,   // minimum value will be 0.
                        // <=> //
                        min: 0,
                        max: 25,
                        stepSize: 5, // 1 - 2 - 3 ...
                        // width:10,
                        
                  
                    }
                }
            }}
            />
           </div>
        </>
    )
}

export default BarChart
