import { Link } from 'react-router-dom';

const NotFound = () => {
    return (  
        <div className = "not-found">
            <p>Sorry</p>
            <p>That page cannot be found</p><br />
            <Link to = "/" id = 'not-found-link'>Back to the homepage...</Link>
        </div>
    );
}
 
export default NotFound;