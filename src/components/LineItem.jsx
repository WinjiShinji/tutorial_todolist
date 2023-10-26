import iconBin from '../icons/bin.png'


export default function LineItem({ item, handleChecked, handleDelete }) {

  return (
    <li className='item'>
          <input 
            type="checkbox"
            checked={item.checked} 
            onChange={() => handleChecked(item.id)}
          />
          <label
            style={(item.checked) ? {textDecoration : "line-through"} : null }
            onClick={() => handleChecked(item.id)}          
          >
            {item.item}
          </label>
          <img 
            src={iconBin} 
            alt="delete" 
            onClick={() => handleDelete(item.id)}
          />
      </li>
  )
}
 