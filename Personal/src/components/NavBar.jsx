import AddForm from "./AddForm"
import Search from "./Search"
import { Navbar } from "flowbite-react"
import { Button } from "flowbite-react"

const NavBar = ({ displayForm, showForm, addLog, handleInputChange, handleSelectChange, handleSubmit }) => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
       {/* <img
         alt="Flowbite React Logo"
       className="mr-3 h-6 sm:h-9 text-white"
       src="/favicon.svg"
      /> */}
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
       BJJ Tracker
      </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4 h-14 items-center">
       <Button className="h-12" onClick={displayForm}>
       {showForm  ? "Close" : "Log Training"}
       </Button>
       {showForm && (<AddForm addLog={addLog} displayForm={displayForm} showForm={showForm} />)}
       {/* <Button>
         Search
       </Button> */}
       <Search handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} handleSubmit={handleSubmit}/>
       <Navbar.Toggle />
     </div>
</Navbar>

  )
}

export default NavBar