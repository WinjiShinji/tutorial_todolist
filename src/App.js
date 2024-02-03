import { useEffect, useState } from "react";
import Header from "./Header";
import AddItem from "./components/AddItem";
import ListArea from "./components/ListArea";
import Footer from "./Footer";
import SearchItem from "./components/SearchItem";

function App() {
  // States //
  const [listItem, setListItem] = useState(
    JSON.parse(localStorage.getItem('list')) || [] )
  const [newListItem, setNewListItem] = useState('')
  const [search, setSearch] = useState('')

  // Local Storage //
  useEffect( () => {
    localStorage.setItem("list", JSON.stringify(listItem))
  }, [listItem])

  // Functions //
  const addItem = (item) => {
    const id =  listItem.length ? listItem[listItem.length -1].id +1 : 1
    const newItem = { id, checked: false, item }
    const listItems = [...listItem, newItem]
    setListItem(listItems)
  }

  // Event Handlers //
  const handleChecked = (id) => {
    const itemCheck = listItem.map( (item) => item.id === id ? { ...item,
    checked: !item.checked } : item)
    setListItem(itemCheck)
  }

  const handleDelete = (id) => {
    const itemCheck = listItem.filter( (item) => item.id !== id )
    setListItem(itemCheck)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newListItem) return
    addItem(newListItem)
    setNewListItem('')
  }


  return (
    <>
      <Header />
      <AddItem 
        newListItem={newListItem}
        setNewListItem={setNewListItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <ListArea 
        listItem={listItem.filter( item => (
          (item.item).toLowerCase()).includes(search.toLowerCase()
        ))}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer length={listItem.length} />
    </>
  );
}

export default App;
