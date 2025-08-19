import React from 'react';
import './modal.css';

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal show">
      <h2>{message}</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
