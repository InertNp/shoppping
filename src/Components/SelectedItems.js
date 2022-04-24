function SelectedItems({ data }) {
  // console.log(data)
  return (
    <div className="selected sub-container">
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
      <p>Quantity:{data.quantity}</p>
    </div>
  );
}

export default SelectedItems;
