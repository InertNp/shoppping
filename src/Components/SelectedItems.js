function SelectedItems({ data }) {

  return (
    <div className="selected container">
      {data.map((n) => (
        <ShowItems data={n} key={n.id} />
      ))}
    </div>
  );
}

function ShowItems({ data }) {
  return (
    <div className="items">
      <p>Name:{data.Name}</p>
      <p>Price:Rs.{data.Price} </p>
      <p>Quantity:1</p>
    </div>
  );
}

export default SelectedItems;
