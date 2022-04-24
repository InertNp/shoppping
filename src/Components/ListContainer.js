import { List } from "../Data/Info";


function ListContainer({ transferdataAdd, transferdataMinus }) {
  return (
    <div className="sub-container">
      {List.map((n) => (
        <ShowItems key={n.id}
         data={n}
          transferdataAdd={(n) => transferdataAdd(n)}
          transferdataMinus={(n) => transferdataMinus(n)} />
      ))}
    </div>
  );
}

function ShowItems({ data, transferdataAdd ,transferdataMinus }) {
  function handleAdd(e) {
    transferdataAdd(e)
  }
  function handleMinus(e) {
    transferdataMinus(e)
  }
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

export default ListContainer;
