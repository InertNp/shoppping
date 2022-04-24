import { useState } from "react";
import { Header } from "./Components/Header";
import ListContainer from "./Components/ListContainer";
import SelectedItems from "./Components/SelectedItems";
import { List } from "./Data/Info";

/* //////////////////////////////////////////////////////////////////////////// */
function App() {

  const [selectedItems, SetSelectedItems] = useState();
  if (selectedItems == null) {
    SetSelectedItems([])
  }
  if (selectedItems) {
    //increasing quantity to 1 as default value is 0
    selectedItems.map((n) => {
      if (n.quantity === 0) {
        n.quantity++;
        // console.log("the value added from 0 to 1")
      }
    })
  }
  //Handling values
  function handleAdd(data) {
    selectedItems.forEach((n) => {
      if (n.id === data.id) {
        n.quantity++;
      }
    })
    const Avalue = selectedItems.concat(data);
    //i = data , p = data's position in array
    const trueValue = Avalue.filter((i, p) => Avalue.indexOf(i) === p);
    SetSelectedItems(trueValue)

  }
  //handling minus values
  function handleMinus(data) {
  
      selectedItems.map((n) => {
        if(n.quantity >= 1){
          if(n.id === data.id){
            n.quantity--;
            // console.log(n)s
          }

        }
        
      })
      //i = data , p = data's position in array
      const trueValue = selectedItems.filter((i, p) => selectedItems.indexOf(i) === p);
      SetSelectedItems(trueValue)

    
  }




  return (
    <>
      <Header />
      <div className="container">
        <ListContainer
          transferdataAdd={(n) => { handleAdd(n) }}
          transferdataMinus={(n) => { handleMinus(n) }}
        />
        <SelectedItems data={selectedItems} />
      </div>
    </>
  );
}

export default App;
