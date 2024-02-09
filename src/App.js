import React from "react";
import logo from './logo.svg';
import './App.css';
// import { firestore } from './firebase';
import LeaderBoard from './Leaderboard';
function App() {

  React.useEffect(() => {
    
  }, [])

  return (
    <div className="App">
      <LeaderBoard />
    </div>
  );
}

export default App;
