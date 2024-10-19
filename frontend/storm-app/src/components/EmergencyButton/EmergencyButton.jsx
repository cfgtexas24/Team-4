import { useState } from 'react';
import './EmergencyButton.css';

const EmergencyButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertSent, setAlertSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleButtonClick = () => {
    console.log('Emergency button clicked');
    setIsModalOpen(true);
    setAlertSent(false);
    setError(null);
  };

  const handleConfirm = async () => {
    console.log('Confirm button clicked');
    setIsModalOpen(false);
    setIsLoading(true);
    setError(null);

    try {
      console.log('Attempting to send emergency alert');
      const response = await fetch('http://127.0.0.1:5000/api/send-emergency-alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Emergency alert: John Doe has reported being homeless and needs assistance. Please call them at: +1-234-567-8900' }),
      });
      
      console.log('Received response from server');
      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send alert');
      }

      setAlertSent(true);
      console.log('Alert sent successfully');
    } catch (err) {
      console.error('Error sending alert:', err);
      setError(`Failed to send emergency alert: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
    setIsModalOpen(false);
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  const modalStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    zIndex: 10000,
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
    position: 'relative', // Add this line
  };


  return (
    <div>
      <button onClick={handleButtonClick} className="emergency-button" disabled={isLoading}>
        Emergency Alert
      </button>
      {isModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <h2>Confirm Emergency</h2>
            <p>Are you homeless? Do you want to send an alert to the admin?</p>
            <button onClick={handleConfirm} disabled={isLoading} style={{marginRight: '10px'}}>
              Yes, send alert
            </button>
            <button onClick={handleCancel} disabled={isLoading}>
              No, cancel
            </button>
          </div>
        </div>
      )}
      {isLoading && <p>Sending alert...</p>}
      {alertSent && <p className="alert-message">Your emergency alert has been sent to the admin.</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default EmergencyButton;