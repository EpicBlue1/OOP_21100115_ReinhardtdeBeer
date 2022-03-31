import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';


const Optionbar = () => {
     return(
        <Row><div className='whitebar'>

        <select className='dateSel'>
            <option>Choose Date</option>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
            <option>Option Five</option>
        </select>
        
        <button className="btn btn-primary dateSelTwo"><Link to="/Timeline">Asteroid Timeline</Link></button>
    
    </div></Row>
     )
}

export default Optionbar