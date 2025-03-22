import React from 'react';
import { motion } from 'framer-motion';

const MainLayout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#1C1E26]"
    >
      {children}
    </motion.div>
  );
};

export default MainLayout;