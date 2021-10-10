import React, { useEffect,useState} from 'react'
import { Bar } from 'react-chartjs-2';
// import  axios  from 'axios';
import dataChart from '../Data.json';

const BarChart = () => {
    // const colorStore = ['#693D3D','#BA5536','#A43820','#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];
    let [chartData,  setChartData] = useState({});
    let [labelsBar,setLabelBar] = useState([{
        label: 'Craft',
        data:[1,2,3,4],
        backgroundColor: '#F2994A',
        borderColor: '#fff',
        borderWidth: 0,
        barThickness: 30
    }
]);
    //  Fetch file to return data bar stacked 
    let Q1 = new Map(),
        Q2 = new Map(),
        Q3 = new Map(),
        Q4 = new Map(),
        catgry = new Map();
     dataChart.goals.forEach(({ difficulty_points, category ,month }) => {
        //  to checked category
        catgry.set(category,"");

        if (month === "January" || month === "February" || month === "March") {
            if(Q1.has(category)){
                Q1.set(category, {points : ( Q1.get(category).points + difficulty_points),title : category, color : '#693D3D'});
            }else {
                Q1.set(category, {points : difficulty_points,title : category, color:'#693D3D'});
            }
            // Q1.set({difficulty_points,category,month});
        } else if (month === "April" || month === "May" || month === "June") {
            if(Q2.has(category)){
                Q2.set(category, {points : ( Q2.get(category).points + difficulty_points),title : category, color : '#693D3D'});
            }else {
                Q2.set(category, {points : difficulty_points,title : category, color:'#896D6D'});
            }
        } else if (month === "July" || month === "August" || month === "September") {
            if(Q3.has(category)){
                Q3.set(category, {points : ( Q3.get(category).points + difficulty_points),title : category, color : '#693D3D'});
            }else {
                Q3.set(category, {points : difficulty_points,title : category, color:'#595D5D'});
            }
        } else if (month === "October" || month === "November" || month === "December") {
            if(Q4.has(category)){
                Q4.set(category, {points : ( Q4.get(category).points + difficulty_points),title : category, color : '#693D3D'});
            }else {
                Q4.set(category, {points : difficulty_points,title : category, color:'#693D3D'});
            }
        }
        // return {
        //     difficulty_points,
        //     category,
        //     month
        // }
    });
    // print catrego
    // console.log('cetogry -> ',catgry);

   catgry.forEach((index,value) => {
       let textCategory = value;
       [Q1,Q2,Q3,Q4].forEach((indexQuarter , valueQuarter) => {
           if(!indexQuarter.has(textCategory)){
              indexQuarter.set(textCategory, {points : 0})
           }
            //  console.log('indee', indexQuarter);
       });
   });

    console.log('\n quratar', Q1,
                '\n', 'quratar 2',
                '\n',Q2, 'Quratar 3',
                '\n', Q3, 'Quratar 4',
                '\n', Q4);
    // print first quarter 
    // console.log('Q!!!',Q1);
    // let m = 'people';
    // console.log('Q! -> ', Q1.get(m).points);
    // print new data chart 
    // console.log('All goals -> ', newDataChart);

    // Create Arrays Quarter

    // newDataChart.forEach((item) => {
    //     if (item.month === "January" || item.month === "February" || item.month === "March") {
    //         Q1.push(item);
    //     } else if (item.month === "April" || item.month === "May" || item.month === "June") {
    //         Q2.push(item);
    //     } else if (item.month === "July" || item.month === "August" || item.month === "September") {
    //         Q3.push(item);
    //     } else if (item.month === "October" || item.month === "November" || item.month === "December") {
    //         Q4.push(item);
    //     }
    // });

    // print data quaratars  

    // //  console.log("q1 -> ", Q1);
    // let categoryQ1 = new Map(),
    //     categoryQ2 = new Map(),
    //     categoryQ3 = new Map(),
    //     categoryQ4 = new Map();

//    [Q1,Q2,Q3,Q4].forEach((dataInsideQuartar) => {
//        let crrDiffPoints = "";
//        let sumPoints =0;
//        crrDiffPoints = dataInsideQuartar.category;
//         //  console.log(dataInsideQuartar);
//        console.log("item Data" , dataInsideQuartar);
//        dataInsideQuartar.forEach(({difficulty_points,category}) => {
//            if(crrDiffPoints === category){
//             sumPoints +=difficulty_points;
//            }
//            categoryQ1.set(crrDiffPoints, sumPoints);
//        });
//    })
   
//    console.log('category 1',categoryQ1);
//     let indexQ=0;
//     const arrQuarter = [Q1,Q2,Q3,Q4], arrMapQuarter = [categoryQ1,categoryQ2,categoryQ3,categoryQ4];
//    [Q1,Q2,Q3,Q4].forEach((dataInsideQuartar) => {
//                let crrDiffPoints = "";
//                let sumPoints =0,
//                    valueQ1 = arrQuarter[indexQ],
//                    containerQuarter = arrMapQuarter[indexQ];
                    
                //  console.log(dataInsideQuartar);
            //    console.log("item Data" , dataInsideQuartar);
            //    valueQ1.forEach(({difficulty_points,category}) => {
            //        if(crrDiffPoints === category){
            //         sumPoints +=difficulty_points;
            //        }
            //        containerQuarter.set(crrDiffPoints, sumPoints);
            //    });
            //    indexQ++;    
        //    console.log('index',indexQ);
        //    console.log('value Q1',valueQ1);
    // });   

   
    // console.log('category 1',categoryQ1);


//  Statice Quarters 
//    Q1.forEach((dataInsideQuartar) => {
//        let crrDiffPoints = "";
//        let sumPoints =0;
//        crrDiffPoints = dataInsideQuartar.category;
//         //  console.log(dataInsideQuartar);
//     //    console.log("item Data" , dataInsideQuartar);
//        Q1.forEach(({difficulty_points,category}) => {
//            if(crrDiffPoints === category){
//             sumPoints +=difficulty_points;
//            }
//            categoryQ1.set(crrDiffPoints, sumPoints);
//        });
//    });
//    Q2.forEach((dataInsideQuartar) => {
//     let crrDiffPoints = "";
//     let sumPoints =0;
//     crrDiffPoints = dataInsideQuartar.category;
//      //  console.log(dataInsideQuartar);
//     // console.log("item Data" , dataInsideQuartar);
//     Q2.forEach(({difficulty_points,category}) => {
//         if(crrDiffPoints === category){
//          sumPoints +=difficulty_points;
//         }
//         categoryQ2.set(crrDiffPoints, sumPoints);
//     });
// });
// Q3.forEach((dataInsideQuartar) => {
//     let crrDiffPoints = "";
//     let sumPoints =0;
//     crrDiffPoints = dataInsideQuartar.category;
//      //  console.log(dataInsideQuartar);
//     // console.log("item Data" , dataInsideQuartar);
//     Q3.forEach(({difficulty_points,category}) => {
//         if(crrDiffPoints === category){
//          sumPoints +=difficulty_points;
//         }
//         categoryQ3.set(crrDiffPoints, sumPoints);
//     });
// });
// Q4.forEach((dataInsideQuartar) => {
//     let crrDiffPoints = "";
//     let sumPoints =0;
//     crrDiffPoints = dataInsideQuartar.category;
//      //  console.log(dataInsideQuartar);
//     // console.log("item Data" , dataInsideQuartar);
//     Q4.forEach(({difficulty_points,category}) => {
//         if(crrDiffPoints === category){
//          sumPoints +=difficulty_points;
//         }
//         categoryQ4.set(crrDiffPoints, sumPoints);
//     });
// });
//    console.log('categr q1',categoryQ1);
//    console.log('categr q2',categoryQ2);
//    console.log('categr q3',categoryQ3);
//    console.log('categr q4',categoryQ4);




//     let arrQs = [Q1,Q2,Q3,Q4],categoryArr = [categoryQ1,categoryQ2,categoryQ3,categoryQ4];
//     let indexQr = 0;

//     arrQs[indexQr].forEach((dataInsideQuartar) => {
//     let crrDiffPoints = "";
//     let sumPoints =0;
//     crrDiffPoints = dataInsideQuartar.category;
//     //  console.log(dataInsideQuartar);
//     // console.log("item Data" , dataInsideQuartar);
//     arrQs[indexQr].forEach(({difficulty_points,category}) => {
//         if(crrDiffPoints === category){
//             sumPoints +=difficulty_points;
//         }
//         categoryArr[indexQr].set(crrDiffPoints, sumPoints);
//     });
//     indexQr++;
// });
//    console.log('categr q1',categoryQ1);
//    console.log('categr q2',categoryQ2);
//    console.log('categr q3',categoryQ3);
//    console.log('categr q4',categoryQ4);



    // createa new q1 data label 
    // let updateDataQ1 = [],
    //     updateDataQ2 = [],
    //     updataDataQ3 = [],
    //     updateDataQ4 = [];

    // Store Data Category && Set Color To Category
    // let mapCategory = new Map()
    //  newDataChart.forEach((item) => {  
    //     //  console.log('itemss',item.category);
    //      mapCategory.set(item.category,0);
    //  });

    //  //  Print Caetegory Before
    //  console.log('mapCategoryColorBefore -> ',mapCategory);

    //  let indexColor=0;
    //  mapCategoryColorBefore.forEach((key,value) => {
    //     mapCategoryColorAfter.set(value,colorStore[indexColor]);
    //     indexColor++;
    //  })
    //  print category After
    //  console.log('mapCategoryColorAfter -> ',mapCategoryColorAfter);

    // mapCategoryColorBefore.forEach((itemKey,itemValue) => {
    //     // console.log('ii',itemValue);
    //     let findValueCategory = itemValue;
        
    //     [categoryQ1,categoryQ2,categoryQ3,categoryQ4].forEach((item, value)=> {
    //         console.log('index ', item);
    //         item.forEach(( valueCategory, keyCategory) => {
    //             console.log(valueCategory , keyCategory);
    //         });
    //     })
    // })





   const pushNewLabel = () => {
       labelsBar.push({
        label: 'moople',
        data: [9,1,11,2],
        backgroundColor: '#9B51E0',
        borderColor: '#6B51E0',
        borderWidth: 0,
        barThickness: 30
    })
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