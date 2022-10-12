import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className='text-danger fs-1'>Error 404</h2>
      <p className='text-danger fs-3'>Sorry that page cannot be found</p>
      <Link to="/" className='text-success'>Back to Home page</Link>
    </div>
  );
}

export default NotFound;