import logs from "../db.json/";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [showDetails, setShowDetails] = useState(true);
  const [bjjLogs, setBjjLogs] = useState(logs);

  const handleClick = (logId) => {
    const updatedLogs = bjjLogs.map((log) =>
      log.id === logId ? { ...log, showDetails: !log.showDetails } : log
    );
    setBjjLogs(updatedLogs);
  };
  return (
    <div>
      <h1>Bjj Tracker</h1>
      {console.log(bjjLogs)}
      <Card bjjLogs={bjjLogs} handleClick={handleClick} />
    </div>
  );
}

export default App;
