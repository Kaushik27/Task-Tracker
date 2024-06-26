import PropTypes from 'prop-types'
import Button  from './Button'
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "Red" : "Green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
}

// deafult properties
Header.defaultProps = {
    title: "Task Tracker",
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// css in js
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}

export default Header