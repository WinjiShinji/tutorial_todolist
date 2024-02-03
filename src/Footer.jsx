

export default function Footer({ length }) {

  return (
    <footer>
      <p>
        {length !== 0 ? 
          length === 1 ? `${length} List item` : `${length} List items` :
          "No list items"
        }
      </p>
    </footer>
  )
}
