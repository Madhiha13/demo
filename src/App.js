import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/Component_LoginPage/LoginPage/LoginPage';
import SuccessPage from './Components/Component_SuccessPage/SucessPage/SuccessPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </Router>
    );
}

export default App;
