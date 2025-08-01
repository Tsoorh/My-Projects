import React, {useState} from "react";
import Header from "./Header"
import NavigationBar from "./NavigationBar";


function App(){
  const [isOpen,setIsOpen] = useState(false);

  function onOpen(){
    setIsOpen(prev=>!prev);
  }

  return(
    <div className="grid-container">
      <Header
      onOpen={onOpen}
      />
      <NavigationBar
      isOpen={isOpen}
      />
    </div>
    )
}

export default App
