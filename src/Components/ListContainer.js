import { List } from "../Data/Info";
import { useState } from "react";

function ListContainer({ defaultselectedItems, receiveData }) {
  const [selectedItems, setSelectedItems] = useState(defaultselectedItems);

  const handleAdd = (data) => {
    const   valueA = selectedItems.concat([data]);
    setSelectedItems(valueA)
    receiveData(valueA)
    
  };
  const handleMinus = (data) => {
    console.log(selectedItems);
  };

  function ShowItems({data}) {
    return (
      <div className="items">
        <p>Name:{data.Name}</p>
        <p>Price: {data.Price}</p>
        <p className="btn-list">
          <button onClick={() => handleAdd(data)}>+</button>
          <button onClick={() => handleMinus(data)}>-</button>
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      {List.map((n) => (
        <ShowItems key={n.id} data={n} />
      ))}
    </div>
  );
}

export default ListContainer;
