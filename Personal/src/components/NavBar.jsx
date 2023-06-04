import AddForm from "./AddForm"
import Search from "./Search"
import { Navbar } from "flowbite-react"
import { Button } from "flowbite-react"

const NavBar = ({ displayForm, showForm, addLog }) => {
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
      <div className="flex md:order-2">
       <Button onClick={displayForm}>
       {showForm  ? "Close" : "Log Training"}
       </Button>
       {showForm && (<AddForm addLog={addLog} displayForm={displayForm} showForm={showForm} />)}
       <Button>
         Search
       </Button>
       <Navbar.Toggle />
     </div>
     
    {/* <div className="flex justify-between m-6">
    <h2>BJJ Tracker</h2>
    <button onClick={displayForm}>{!showForm  && "Show Form"}</button>
    {showForm && (<AddForm addLog={addLog} displayForm={displayForm} showForm={showForm} />)}
</div>  */}
</Navbar>

  )
}

export default NavBar



  //   
  //   <Navbar.Brand href="https://flowbite-react.com">
  //     <img
  //       alt="Flowbite React Logo"
  //       className="mr-3 h-6 sm:h-9"
  //       src="/favicon.svg"
  //     />
  //     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
  //       Flowbite React
  //     </span>
  //   </Navbar.Brand>
  //   <div className="flex md:order-2">
  //     <Button>
  //       Get started
  //     </Button>
  //     <Navbar.Toggle />
  //   </div>
  //   <Navbar.Collapse>
  //     <Navbar.Link
  //       active
  //       href="#"
  //     >
  //       <p>
  //         Home
  //       </p>
  //     </Navbar.Link>
  //     <Navbar.Link href="#">
  //       About
  //     </Navbar.Link>
  //     <Navbar.Link href="#">
  //       Services
  //     </Navbar.Link>
  //     <Navbar.Link href="#">
  //       Pricing
  //     </Navbar.Link>
  //     <Navbar.Link href="#">
  //       Contact
  //     </Navbar.Link>
  //   </Navbar.Collapse>
  // </Navbar>