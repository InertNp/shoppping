import { useState } from "react";
import { Header } from "./Components/Header";
import ListContainer from "./Components/ListContainer";
import SelectedItems from "./Components/SelectedItems";
import { List } from "./Data/Info";
function App() {
  console.log()
  const [selectedItems, SetSelectedItems] = useState([List[1], List[2]]);
  const handleData = (e) => {
   SetSelectedItems(e)
  };
  // console.log(selectedItems)
  return (
    <>
      <Header />
      <ListContainer
        defaultselectedItems={selectedItems}
        receiveData={(n) => handleData(n)}
      />
      <SelectedItems data={selectedItems}  />
    </>
  );
}

export default App;
