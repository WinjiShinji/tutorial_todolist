import { useRef } from 'react'
import iconAdd from '../icons/add.png'

export default function AddItem({ newListItem, setNewListItem, handleSubmit }) {
  const inputRef = useRef()

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input 
        id="addItem"
        ref={inputRef}
        type="text"
        placeholder="Add item..." 
        autoFocus
        required
        value={newListItem}
        onChange={(e) => { 
          setNewListItem(e.target.value)
        }}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <img src={iconAdd} alt="Add Item" />
      </button>

    </form>
  )
}
