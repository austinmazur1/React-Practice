

const Search = ({ handleInputChange, handleSelectChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <select value={undefined} onChange={handleSelectChange}>
        <option value="gi">Gi</option>
        <option value="nogi">No Gi</option>
      </select>
      <input
        type="text"
        placeholder="Search..."
        value={undefined}
        // onChange={handleInputChange}
        onChange={handleInputChange}
      />
      
      <button type="submit">Search</button>
    </form>


  )
}

{/* <input type="search" onChange={(e) => search(e)} id="default-search" className="block w-full h-12 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date, Position..." required/> */}

export default Search

