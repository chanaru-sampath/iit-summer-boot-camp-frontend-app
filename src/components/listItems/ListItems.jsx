import "./ListItems.css";

const ListItems = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li className="list-item" key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;