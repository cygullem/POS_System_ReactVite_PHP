import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './AppRoutes';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './CSS/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
)
