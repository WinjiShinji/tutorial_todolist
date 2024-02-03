import LineItem from "./LineItem";


export default function ItemList({ listItem, handleChecked, handleDelete }) {

  return (
    <ul>
      {listItem.map( (item) => (
        <LineItem 
          key={item.id}
          item={item}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}
