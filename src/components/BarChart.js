import React,{useEffect,useState} from 'react'
import {Bar} from 'react-chartjs-2';
// import  axios  from 'axios';
import dataChart from '../Data.json';
// import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
const BarChart = () => {
     const [chartData, setChartData] = useState({});

    //  Fetch file 
    const  newDataChart = dataChart.goals.map(({difficulty_points,category,month}) => {
         return {difficulty_points,category,month}
        });
    // print new data chart 
    console.log('fields -> ',newDataChart);
     let Q1 =[],Q2=[],Q3 =[],Q4=[];
    newDataChart.forEach((item ) => {
         if(item.month === "January" || item.month === "February"||item.month === "March"){
            Q1.push(item);
         }else if(item.month === "April" || item.month === "May"||item.month === "June"){
            Q2.push(item);
         }else if(item.month === "July" || item.month === "August"||item.month === "September"){
            Q3.push(item);
         }else if(item.month === "October" || item.month === "November"||item.month === "December"){
             Q4.push(item);
         }
    });

    console.log('quratar',Q1,'quratar 2',Q2,'Quratar 3',Q3,'Quratar 4',Q4);
    // createa new q1 data label 
    let newDataQ1=[],
        newDataQ2=[],
        newDataQ3=[],
        newDataQ4=[];
        

        // print data   
        // console.log('Q1 -> length',Q1.length);
    let i=0;
    while (i<4){
        let newContainer = [];
        let people =0,
        craft=0,
        community=0,
        process=0,
        counter=0;
        // check type Quartar ? ok
        let DataQuartar = [];
        if(i=== 0){
          DataQuartar = Q1;

        }else if(i===1){
            DataQuartar = Q2;
        }else if(i===2){
            DataQuartar = Q3;
        }else{
            DataQuartar = Q4;
        }
      DataQuartar.forEach((item)=>{
        if(item.category === "people"){
            people += item.difficulty_points;
            counter++;
        }else if(item.category=== "craft"){
          craft += item.difficulty_points;
          counter++;
        }else if(item.category=== "community"){
            community += item.difficulty_points;
            counter++;
        }else{
            process += item.difficulty_points;
            counter++;
        }
        if(counter === Q1.length){

        }
    });

        newContainer.push(craft);
        newContainer.push(process);
        newContainer.push(people);
        newContainer.push(community);
        if(i=== 0){
            newDataQ1 = newContainer;
  
          }else if(i===1){
            newDataQ2 = newContainer;
          }else if(i===2){
            newDataQ3 =newContainer;
          }else if(i===3){
            newDataQ4 =newContainer;
          }
          i++;
        }    
        console.log('new Data Q1', newDataQ1);
        console.log('new Data Q2', newDataQ2);
        console.log('new Data Q3', newDataQ3);
        console.log('new Data Q4', newDataQ4);
    // [Q1,Q2,Q3,Q4].forEach((item)=>{
    //     if(item.category === "people"){
    //         people = item.difficulty_points;
    //         counter++;
    //     }else if(item.category=== "craft"){
    //       craft = item.difficulty_points;
    //       counter++;
    //     }else if(item.category=== "community"){
    //         community = item.difficulty_points;
    //         counter++;
    //     }else{
    //         process = item.difficulty_points;
    //         counter++;
    //     }
    //     if(counter === Q1.length){

    //     }

    // });
    
    let k=0,labelData1=[],labelData2=[],labelData3=[],labelData4=[],boardData=[];
   while(k<4){
         let coverArray = [];
       if(k=== 0){
            coverArray = newDataQ1
       }else if(k=== 1){
        coverArray = newDataQ2
       }else if(k=== 2){
        coverArray = newDataQ3
       }else if(k=== 3){
        coverArray = newDataQ4;
       }
       let cnt=0;
    coverArray.forEach((item) => {
            cnt++;
            // console.log('item' , item);
            if(cnt === 1){
            labelData1.push(item);
            }else if(cnt===2){
            labelData2.push(item);
            }else if(cnt===3){
            labelData3.push(item);
            }else if(cnt===4){
            labelData4.push(item);
            cnt=0;
            // labelData =[];
        }
    });
   k++;
   }
boardData.push(labelData1);

boardData.push(labelData2);

boardData.push(labelData3);

boardData.push(labelData4);
    //    Print board data 
   console.log('board data -> ',boardData);

    const charLabelData = [
        // newDataQ1,
        // newDataQ2,
        // newDataQ3,
        // newDataQ4
        [1,7,4,0],
        [1,1,4,5],
        [7,3,2,5],
        [1,1,4,0],   
    ];


    const chart = () => {
          setChartData({
            labels: ['1st', '2nd', '3rd', '4th'],
            datasets: [
                {
                    label: 'Craft',
                    data:boardData[0],
                    backgroundColor: '#F2994A',
                    borderColor: '#F2994A',
                    borderWidth: 1,
                    barThickness:30
                },
                {
                    label: 'Process',
                    data:boardData[1],
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
                    data:boardData[2],
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
                    data:boardData[3],
                    // backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    backgroundColor:'#BB6BD9',
                    borderColor:'#BB6BD9',
                    borderWidth:1,
                    barThickness:30,
                   radius:1,
                }
            ]
            
        
          })
    }
    //   const dataBar1,dataBar2,dataBar3;

    // function addData(chart, label, data) {
    //     chart.data.labels.push(label);
    //     chart.data.datasets.forEach((dataset) => {
    //         dataset.data.push(data);
    //     });
    //     chart.update();
    // }

    // function removeData(chart) {
    //     chart.data.labels.pop();
    //     chart.data.datasets.forEach((dataset) => {
    //         dataset.data.pop();
    //     });
    //     chart.update();
    // }

useEffect(  () => {
    
    // let baseURL = "https://616c358e-9fbe-45aa-889e-0f4f053d7645.mock.pstmn.io/goals";
   
    // http://164.90.188.52:8000/goals
   
    // let baseURL = "https://mockzz.herokuapp.com/goals"; 
    // const fetchData = async() => {
    //        const data = await axios.get(baseURL);
    //         console.log('inside fetch',data);
    //         // setGoals('spreed data',data.data);
        
    // }
    // fetchData();
   chart();
    
 },[ ]);

 return (
     
     <>
           <div className="chart-bar">
              
           <Bar 
            data={chartData}
            options={ {
                scales: {
                    x: {
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
                        beginAtZero: true,   // minimum value will be 0.
                        min: 0,
                        max: 25,
                        stepSize: 5, // 1 - 2 - 3 ...
                        
                  
                    }
                }
            }}
            />
            
           </div>
        </>
    )
}

export default BarChart
