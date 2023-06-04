import logs from "../db.json/";
import { useState } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";


function App() {
  const [showDetails, setShowDetails] = useState(true);
  const [bjjLogs, setBjjLogs] = useState(logs);
  const [showForm, setShowForm] = useState(false)

  //Display addform 
  const displayForm = () => {
    setShowForm(!showForm)
    console.log(showForm)
  }

  //Click event to show more details 
  const handleClick = (logId) => {
    const updatedLogs = bjjLogs.map((log) =>
      log.id === logId ? { ...log, showDetails: !log.showDetails } : log
    );
    setBjjLogs(updatedLogs);
  };

  //Add log
const addLog = (newLog) => {
  const newBjjLogs = [...bjjLogs, newLog]
  setBjjLogs(newBjjLogs);
}    

  return (
    <div>
      <NavBar displayForm={displayForm} showForm={showForm} addLog={addLog}/>
      <Card bjjLogs={bjjLogs} handleClick={handleClick} />
    </div>
  );
}

export default App;
