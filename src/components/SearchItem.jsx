
export default function SearchItem({ search, setSearch }) {

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search Items</label>
      <input 
        id="search"
        type="text"
        role="searchbox" 
        placeholder="Search items..."
        value={search}
        onChange={ (e) => setSearch(e.target.value) }
      />
    </form>
  )
}
