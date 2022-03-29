import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AstroidObjects.css';
import { Chart as ChartJS, ArcElement, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { faker } from '@faker-js/faker';
import { Radar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, RadialLinearScale, PointElement, LineElement, Filler, Legend);

const AstroidObject = (props) =>{
    return (
        <>
        <Col className="AsGraph col">
            <div>{props.MD}</div>
            <Radar data = {{
                labels: ['Object 1', 'Object 2', 'Object 3', 'Object 4', 'Object 5', 'Object 6'],
                datasets: [
                    {
                    label: 'Object 1',
                    data: [2, 9, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(152,198,240, 0.5)'
                    ],
                    borderColor: 'rgba(152,198,240, 1)',
                    borderWidth: 1,
                    },
                ],
                }}
            />
        </Col>
        <Col className="AsGraph col">
            <Radar data = {{
                labels: ['Object 1', 'Object 2', 'Object 3', 'Object 4', 'Object 5', 'Object 6'],
                datasets: [
                    {
                    label: 'Object 2',
                    data: [2, 9, 3, 5, 3, 3],
                    backgroundColor: [
                        'rgba(121,162,234, 0.5)',
                    ],
                    borderColor: 'rgba(121,162,234, 1)',
                    borderWidth: 1,
                    },
                ],
                }}
            />
        </Col>
        <Col className="AsGraph col">
            <Radar data = {{
                labels: ['Object 1', 'Object 2', 'Object 3', 'Object 4', 'Object 5', 'Object 6'],
                datasets: [
                    {
                    label: 'Object 3',
                    data: [2, 9, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(85,118,234, 0.5)',
                    ],
                    borderColor: 'rgba(85,118,234, 1)',
                    borderWidth: 1,
                    },
                ],
                }}
            />
        </Col>
        <Col className="AsGraph col">
            <Radar data = {{
                labels: ['Object 1', 'Object 2', 'Object 3', 'Object 4', 'Object 5', 'Object 6'],
                datasets: [
                    {
                    label: 'Object 4',
                    data: [2, 9, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(60,49,180, 0.5)',
                    ],
                    borderColor: 'rgba(60,49,180, 1)',
                    borderWidth: 1,
                    },
                ],
                }}
            />
        </Col>
        <Col className="AsGraph col">
            <Radar data = {{
                labels: ['Object 1', 'Object 2', 'Object 3', 'Object 4', 'Object 5', 'Object 6'],
                datasets: [
                    {
                    label: 'Object 5',
                    data: [2, 9, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(41,23,101, 0.5)',
                    ],
                    borderColor: 'rgba(41,23,101, 1)',
                    borderWidth: 1,
                    },
                ],
                }}
            />
        </Col>
        </>
        
    )
}

export default AstroidObject