import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import AppRouter from './Routing/AppRouter'
import LoginProvider from './Components/Contexts/LoginContext';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <AppRouter />
      </LoginProvider>
    </div>
  );
}

export default App;
