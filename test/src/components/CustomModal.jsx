// CustomModal.js
import React from "react";

export const CustomModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-bg fixed inset-0 bg-black opacity-40"></div>
      <div className="modal-content bg-white w-96 p-4 rounded-lg shadow-lg z-50">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
            X
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

