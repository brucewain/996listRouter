import { Link } from 'react-router-dom';

function CarLinks() {
  return (
      <div>
      <Link to="/productListingPage?model=996.1">996.1</Link>
      <Link to="/productListingPage?model=996.2">996.2</Link>
      <Link to="/productListingPage?model=4S">C4S</Link>
      <Link to="/productListingPage?model=Turbo">Turbo</Link>
      <Link to="/productListingPage?model=GT3">GT3</Link>
      <Link to="/productListingPage?model=GT2">GT2</Link>

    </div>
  );
}

export default CarLinks;