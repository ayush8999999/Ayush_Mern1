import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src="https://png.pngtree.com/png-vector/20230513/ourmid/pngtree-motorbike-line-art-logo-design-vector-png-image_7095430.png" // Replace with the URL of your logo
          width="70" // Adjust width as needed
          height="auto" // Maintain aspect ratio
          alt="Logo"
        />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item">
            <Link className="nav-link" to="/BookForm">Book Bike</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Maintain">Maintenance</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="btn btn-primary" to="/create" style={{ position: 'absolute', top: '25px', right: '10px'}}>Create Bike Card</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
