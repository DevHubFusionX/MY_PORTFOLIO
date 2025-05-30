import React from 'react';
import '../Contact/Notification.css';
import './Notify.css';

const WebsiteReview = ({ isOpen, onClose, onSubmit, review, setReview }) => {
  if (!isOpen) return null;

  return (
    <div className="notification-overlay">
      <div className="notification-content">
        <div className="notification-header">
          <h3>Website Review</h3>
          <button className="notification-close" onClick={onClose}>
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className="notification-body">
          <p>Would you mind sharing your thoughts about this website?</p>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Share your feedback..."
            rows="4"
            className="review-textarea"
          />
        </div>
        <div className="notification-actions">
          <button className="btn-submit" onClick={onSubmit}>Submit Review</button>
          <button className="btn-later" onClick={onClose}>Maybe Later</button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteReview;
