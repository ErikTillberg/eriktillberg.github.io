import React from 'react';
import './App.css';
import Term from './components/Term/Term'

function App() {

  const [desktopVersion, setDesktopVersion] = React.useState('apple')

  return (
    <div className="App" style={{backgroundImage: desktopVersion === 'windows' ? `url("windows-background.jpeg")` : `url("background.jpeg")`}}>
      <header className="App-header">
      </header>
      <Term
        onDesktopVersionChanged={setDesktopVersion}/>
    </div>
  );
}

export default App;
