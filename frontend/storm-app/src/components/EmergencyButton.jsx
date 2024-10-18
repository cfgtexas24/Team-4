import PropTypes from 'prop-types';

const EmergencyButton = ({ onAlert }) => {
  return (
    <button onClick={onAlert} className="emergency-button">
      Emergency Alert
    </button>
  );
};

EmergencyButton.propTypes = {
  onAlert: PropTypes.func.isRequired,  // Validate that onAlert is a function and required
};

export default EmergencyButton;