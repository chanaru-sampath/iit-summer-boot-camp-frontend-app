import "./ListItems.css";

const ListItems = ({ title, technologies }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {technologies.map((item) => (
          <li className="tech-item" key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;