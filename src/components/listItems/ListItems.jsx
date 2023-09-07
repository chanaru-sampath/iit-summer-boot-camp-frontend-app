import "./ListItems.css";

const ListItems = ({ title, items }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((item) => (
          <li className="list-item" key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;