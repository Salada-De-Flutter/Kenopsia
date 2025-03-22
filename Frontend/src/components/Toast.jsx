import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ show, message, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg z-50 text-sm"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;