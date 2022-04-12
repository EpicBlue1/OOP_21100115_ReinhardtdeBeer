import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SubComponents/AstroidObjects.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import BarChart from './SubComponents/bartChart';
import AsGraph from './SubComponents/AsGraph';
import AsRad from './SubComponents/AsteroidRadar';

ChartJS.register(ArcElement, Tooltip, RadialLinearScale, PointElement, LineElement, Filler, Legend);

const AstroidGraphs = () =>{

    const [Selection, setSelection] = useState("2015-01-27")
    const [DatesComp, setDatesComp] = useState([])
    const [PieInfo, setPieInfo] = useState([]);
    const [DropdownDefault, setDropdownDefault] = useState("Loading...");
    const [Rad, setRad] = useState([]);
    const [RadTwo, setRadTwo] = useState([]);


    const [ObjectOneIfo, setObjectOneIfo] = useState();

    const [DateSelOne, setDateSelOne] = useState("2022-04-12");

    const [ObjValOne, setObjValOne]  = useState(1);
    const [ObjValTwo, setObjValTwo] = useState(1);

    const FirstVal = useRef();
    const SecondVal = useRef();
    const FirstObj = useRef();
    const SecondObj = useRef();

    let defaultVal = "2015-08-07";

    const FirstDate = () => {
        let DateSelectO = FirstVal.current.value;

        setDateSelOne(DateSelectO);
        console.log(DateSelectO);
        console.log(PieInfo);
    }

    const SelOneObj = () => {
        let DateSelectO = FirstObj.current.value;

        setObjValOne(DateSelectO);
        console.log(DateSelectO);
    }

    const SelTwoObj = () => {
        let DateSelectT = SecondObj.current.value;
        
        setObjValTwo(DateSelectT);
        console.log(DateSelectT);
    }

    
    const [RadData, setRadData] = useState([]);

    const RadarGr = [];

    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC')
        .then((res) => {
            const data = res.data.near_earth_objects;

            var variables = Object.keys(data);

            const sortedDates = variables.sort();

            setDatesComp(sortedDates);

            if(PieInfo.length === 0) {
                console.log("Not Loaded yet");
                defaultVal = "Choose Date";
                setDropdownDefault(defaultVal);
            }

            const dataDate = res.data.near_earth_objects[DateSelOne];

            console.log(dataDate);

            var textOne = 0;
            var textTwo = 0;

            var totalM = 0;
            for(var i = 0; i < dataDate.length; i++) {
                totalM += dataDate[i].absolute_magnitude_h;
            }
            var avgM = totalM / dataDate.length;

            var totalS = 0;
            for(var i = 0; i < dataDate.length; i++) {
                totalS += ((dataDate[i].estimated_diameter.meters.estimated_diameter_max + dataDate[i].estimated_diameter.meters.estimated_diameter_max) / 2);
            }
            var avgS = totalS / dataDate.length;

            var totalV = 0;
            for(var i = 0; i < dataDate.length; i++) {
                textOne = dataDate[i].close_approach_data[0].relative_velocity.kilometers_per_hour;
                var numOne = parseInt(textOne);
                totalV += numOne;
            }
            var avgV = totalV / dataDate.length;

            console.log(avgV)

            var totalMD = 0;
            for(let i = 0; i < dataDate.length; i++) {
                textTwo = dataDate[i].close_approach_data[0].miss_distance.kilometers;
                var numTwo = parseInt(textTwo);
                totalMD +=  numTwo;
            }
            var avgMD = totalMD / dataDate.length;
            console.log(dataDate);


            for(let i = 0; i < dataDate.length; i++) {
                let potentially = dataDate[i].is_potentially_hazardous_asteroid;
                let AssName = 'Object ' + [i] + ' ' + dataDate[i].name;

                let magPerc = (avgM / dataDate[i].absolute_magnitude_h) * 100;
                if(magPerc > 100){
                    magPerc = 100;
                }

                let magSi = (avgS /  (dataDate[i].estimated_diameter.meters.estimated_diameter_max + dataDate[i].estimated_diameter.meters.estimated_diameter_max)) * 100;
                if(magSi > 100){
                    magSi = 100;
                }

                let magVol = (avgV / dataDate[i].close_approach_data[0].relative_velocity.kilometers_per_hour) * 100;
                if(magVol > 100){
                    magVol = 100;
                }

                let magMd = (avgMD / dataDate[i].close_approach_data[0].miss_distance.kilometers) * 100;
                if(magMd > 100){
                    magMd = 100;
                }

                console.log(magMd)


                RadarGr.push({
                    Number: i,
                    Name: AssName,
                    MissDistance: magMd,
                    Size: magSi,
                    Velocity: magVol,
                    Magnitude: magPerc,
                    potentiallyHazardous: potentially.toString(),
                    Date: dataDate[i].close_approach_data[0].close_approach_date_full,
                    })
                }

                console.log(RadarGr)

            let Items = RadarGr.map((item) => <AsRad date={item.Date} num={item.Number} name={item.Name} PH={item.potentiallyHazardous} magnitude={item.Magnitude} velocity={item.Velocity} size={item.Size} MD={item.MissDistance}/>)
            setRadData(Items);


            const CompareDatasetOne = [];

            for(let i = 0; i < dataDate.length; i++){
                CompareDatasetOne.push({
                    Name: 'Object ' + [i] + ' ' + dataDate[i].name,
                    Index: i,
                    Size: (dataDate[i].estimated_diameter.meters.estimated_diameter_min + dataDate[i].estimated_diameter.meters.estimated_diameter_max) /2,
                    MissDistance: dataDate[i].close_approach_data[0].miss_distance.kilometers,
                    MissDistanceLunar: dataDate[i].close_approach_data[0].miss_distance.lunar,
                    Velocity: dataDate[i].close_approach_data[0].relative_velocity.kilometers_per_hour,
                    Magnitude: dataDate[i].absolute_magnitude_h,
                })
            }

            console.log(CompareDatasetOne)



            let InfoOne = CompareDatasetOne[ObjValOne];
            let InfoTwo = CompareDatasetOne[ObjValTwo];


            setObjectOneIfo([InfoOne, InfoTwo]);
            setPieInfo(CompareDatasetOne);
            console.log(Rad)



    })

    }, [DateSelOne, ObjValOne, ObjValTwo]) //only run once

    
    return(
    <>
        <Row><h1 className="Heading">Near Earth Objects 2015 September</h1></Row>
        <Row><div className="Description"><p>Welcome to the comparison page. Choose any date from this week to compare the sizes of near-Earth objects using a bar graph and a pie chart. A summary of all objects on the selected date is provided, including their MissDistance, Size, Magnitude, and Velocity.</p></div></Row>
        <Row>
        <Col>
            <div className="GraphOne">
                <div className="SelectDate">
                 <h4>Select a date to compare objects</h4>

                <select className="ObjSel" onChange={FirstDate} ref={FirstVal}>
                <option>{DropdownDefault}</option>
                {DatesComp.map((date) => <option key={date} value={date}>{date}</option>)}
                </select>

                </div>
                
                <div className="SelectDate">
                <h4>Select Asteroids to Compare</h4>
                <select className="ObjSel" onChange={SelOneObj} ref={FirstObj}>
                {PieInfo.map((date) => <option value={date.Index}>{date.Name}</option>)}
                </select>
                <select className="ObjSel" onChange={SelTwoObj} ref={SecondObj}>
                {PieInfo.map((date) => <option value={date.Index}>{date.Name}</option>)}
                </select>
                </div>
                
                <AsGraph data={ObjectOneIfo}/>
                <div className="Description"><br></br><p>Sizes of two Asteroids shown and compared on Pie Chart</p></div>
            </div>
        </Col>

        <Col>
            <div className="GraphTwo">
            <h2>Object Stats {DateSelOne}</h2>
            <div className="Radars">
            {RadData}
            </div>

                           
            </div>
            <div className="GraphTwo">
                <BarChart data={ObjectOneIfo}/>
                <div className="Description"><br></br><p>Sizes of two Asteroids shown and compared on Bar Chart</p></div>
            </div>
        </Col>
        </Row>
    </> 

    )
}

export default AstroidGraphs;