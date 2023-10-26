import ItemList from "./ItemList";

export default function ListArea({ listItem, handleChecked, handleDelete }) {
 
  return (
    <main>
      { listItem.length ? (
        <ItemList 
          listItem={listItem}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ) : (
        <p>
          List Is Empty
        </p>
      )}
    </main>
  )
}
