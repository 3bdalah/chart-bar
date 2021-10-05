import React,{useEffect} from 'react'
import {Bar} from 'react-chartjs-2';
import  axios  from 'axios';
const BarChart = () => {

//   const dataBar1,dataBar2,dataBar3;
useEffect(  () => {
    let baseURL = "https://616c358e-9fbe-45aa-889e-0f4f053d7645.mock.pstmn.io/goals";
    async function fetchData() {
       const data = await axios.get(baseURL);
        console.log(data.data);
    }
   fetchData();
   
    
 },[]);


    return (
        
        <>
           <div className="chart-bar">
               {/* {Data.data.map(item => {
                   return <p>{item.id}</p>
               })} */}
           <Bar 
            // width={1000}
            // className="chart-bar"
            
            data={{
                labels: ['1st', '2nd', '3rd', '4th'],
                datasets: [
                    {
                        label: 'Craft',
                        data: [ 5, 10, 4, 0],
                        backgroundColor: '#F2994A',
                        borderColor: '#F2994A',
                        borderWidth: 1,
                        barThickness:30
                    },
                    {
                        label: 'Process',
                        data:[5, 3, 0, 0],
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
                        data:[5, 4, 0, 0],
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
                        data:[5, 2, 0, 0],
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
                
            }}
            options={ {
                scales: {
                   
                
                
                    x: {
                        // alignToPixels:2,
                        title:{
                            display: true,
                            text:'ee',
                            // padding: 10,
                            position:'top',
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
                            // osition: ;
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
