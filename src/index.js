import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { motion, AnimatePresence } from 'framer-motion';

ReactDOM.render(
  <AnimatePresence>
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <App />
    </motion.div>
  </AnimatePresence>,

  document.getElementById('root')
);

reportWebVitals();
