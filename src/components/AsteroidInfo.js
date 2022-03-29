import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Asgraph from './AstroidGraphs';
import Asobj from './SubComponents/AstroidObj';
import TimeLine from './Timeline';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import AsGra from './SubComponents/AsteroidRadar';
import Astobj from './SubComponents/AstroidObj';
import {Link} from 'react-router-dom';



import './SubComponents/AstroidObjects.css';

const AsteroidInfo = () => {

    const [PieInfo, setPieInfo] = useState([]);
    const [RadarInfo, setRadarInfo] = useState([]);
    const [DispData, setDispData] = useState([]);

    const Radar = [];


    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC')
        .then((res) => {
            const numText = '2015-09-07';
            const data = res.data.near_earth_objects[numText];
            console.log(data);

            for(let i = 0; i < data.length; i++) {
                let potentially = data[i].is_potentially_hazardous_asteroid;

                    Radar.push({
                        Number: i,
                        Name: data[i].name,
                        MissDistance: data[i].close_approach_data[0].miss_distance.kilometers,
                        Size: (data[i].estimated_diameter.meters.estimated_diameter_max + data[i].estimated_diameter.meters.estimated_diameter_max) / 2,
                        Velocity: data[i].close_approach_data[0].relative_velocity.kilometers_per_hour,
                        Magnitude: data[i].absolute_magnitude_h,
                        potentiallyHazardous: potentially.toString(),
                        Date: data[i].close_approach_data[0].close_approach_date_full,
                    })
                
            }

            console.log(Radar[1].Name)

            setPieInfo([Radar]);

            let startItem = Radar.map((item) => <Astobj date={item.Date} num={item.Number} name={item.Name} PH={item.potentiallyHazardous} magnitude={item.Magnitude} velocity={item.Velocity} size={item.Size} MD={item.MissDistance}/>)
            setDispData(startItem);
})

    }, []) //only run once


    
    return (
        <Container fluid className="InfoCon">
            <Row><h1 className="Heading">Near Earth Objects 2015 September</h1></Row>
            <Row>
                <div className="Buttons">
                    <button className="btn btn-primary"><Link to="/AstroidGraphs">Graph View</Link></button>
                    <button className="btn btn-primary"><Link to="/">Astroid Preview</Link></button>
                </div>
            </Row>
            <Row className='AsobjHeight'>
                {DispData}
            </Row>
        </Container>
    )
}

export default AsteroidInfo;