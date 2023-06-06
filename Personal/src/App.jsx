import logs from "../db.json/";
import { useState } from "react";
import LogCard from "./components/LogCard";
import NavBar from "./components/NavBar";



function App() {
  const [showDetails, setShowDetails] = useState(true);
  const [bjjLogs, setBjjLogs] = useState(logs);
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedOption, setSelectedOption] = useState("")


  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(handleInputChange && handleSelectChange) {

    
    const filter = bjjLogs.filter((logs) => 
      logs.gi.includes(selectedOption)
    )
    setBjjLogs(filter)
    console.log(filter)
  }     
     
    console.log("Search term:", searchTerm)
    console.log("Dropdown:", selectedOption)
  }

  //Search Logs
  // const searchLogs = (e) => {
  //   const value = e.target.value.toLowerCase();
  //   console.log(value)
  //   const filteredLogs = bjjLogs.filter((logs) => 
  //     logs.position.toLowerCase().includes(value)
  //   )
  //   if(value === ""){
  //     setBjjLogs(logs)
  //   } else {
  //   setBjjLogs(filteredLogs)
  // }
  // }

  //Filter gi or no gi
  const filterGi = (e) => {
    const value = e.target.value.toLowerCase;
    const filteredLogs = bjjLogs.filter((logs) => 
      logs.gi.includes(value)
    )

  }

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
      <NavBar displayForm={displayForm} showForm={showForm} addLog={addLog} handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} handleSubmit={handleSubmit}/>

      <LogCard bjjLogs={bjjLogs} handleClick={handleClick} />
    </div>
  );
}

export default App;
