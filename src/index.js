import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
<script src="https://cdn.jsdelivr.net/npm/appwrite@13.0.1"></script>
<script>
    const { Client } = Appwrite;
</script>
reportWebVitals(sendToVercelAnalytics);
