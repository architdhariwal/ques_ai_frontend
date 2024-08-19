import React, { useEffect } from 'react';

function Modal({ children, onClose }) {
  // Handle closing modal on "Escape" key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Handle click outside the modal content to close it
  const handleOverlayClick = (event) => {
    if (event.target.className.includes('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 bg-[#0303039a] flex items-center justify-center modal-overlay'
      onClick={handleOverlayClick}
    >
      <div className='bg-white p-6 rounded shadow-lg flex flex-col'>
        {children}
      </div>
    </div>
  );
}

export default Modal;