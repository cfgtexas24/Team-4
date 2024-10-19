import { useState } from 'react';
import './EmergencyButton.css';

const EmergencyButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertSent, setAlertSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleButtonClick = () => {
    setIsModalOpen(true);
    setAlertSent(false);
    setError(null);
  };

  const handleConfirm = async () => {
    setIsModalOpen(false);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/send-emergency-alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Emergency alert: A user has reported being homeless and needs assistance.' }),
      });

      if (!response.ok) {
        throw new Error('Failed to send alert');
      }

      setAlertSent(true);
    } catch (err) {
      setError('Failed to send emergency alert. Please try again.');
      console.error('Error sending alert:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick} className="emergency-button" disabled={isLoading}>
        Emergency Alert
      </button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Confirm Emergency</h2>
              <p>Are you homeless? Do you want to send an alert to the admin?</p>
              <button onClick={handleConfirm} className="confirm-button" disabled={isLoading}>
                Yes, send alert
              </button>
              <button onClick={handleCancel} className="cancel-button" disabled={isLoading}>
                No, cancel
              </button>
            </div>
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