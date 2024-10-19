import { useState } from 'react';
import './EmergencyButton.css';  

const EmergencyButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);   // Modal visibility state
  const [alertSent, setAlertSent] = useState(false);       // State to track if the message has been sent

  // Function to handle opening the modal
  const handleButtonClick = () => {
    setIsModalOpen(true);
    setAlertSent(false);  // Reset the alertSent state when button is clicked again
  };

  // Function to handle confirmation (Yes)
  const handleConfirm = () => {
    setIsModalOpen(false);  // Close the modal
    setAlertSent(true);      // Set alertSent to true to display confirmation message

    // Logic to send an alert (to admin, etc.)
    console.log('Admin has been alerted about the emergency.');
    // API call or Firebase message ? 
  };

  // Function to handle cancel (No)
  const handleCancel = () => {
    setIsModalOpen(false);   // Close the modal without sending the alert
  };

  return (
    <div>
      <button onClick={handleButtonClick} className="emergency-button">
        Emergency Alert
      </button>

      {/* Modal content */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Confirm Emergency</h2>
              <p>Are you homeless? Do you want to send an alert to the admin?</p>
              <button onClick={handleConfirm} className="confirm-button">Yes, send alert</button>
              <button onClick={handleCancel} className="cancel-button">No, cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Display confirmation message after the alert is sent */}
      {alertSent && (
        <p className="alert-message">Your emergency alert has been sent to the admin.</p>
      )}
    </div>
  );
};

export default EmergencyButton;