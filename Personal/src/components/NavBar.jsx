import AddForm from "./AddForm"
import Search from "./Search"

const NavBar = ({ displayForm, showForm, addLog }) => {
  return (
    <div className="flex justify-between m-6">
        <h2>BJJ Tracker</h2>
        <button onClick={displayForm}>{!showForm  && "Show Form"}</button>
        {showForm && (<AddForm addLog={addLog} displayForm={displayForm} showForm={showForm} />)}
    </div>
  )
}

export default NavBar
