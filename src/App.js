

import Nav from "./components/Nav";
import Mainscreen from "./components/Mainscreen";
import Selectionbar from "./components/Selectionbar";
import { useState } from "react";
import { requestPermission } from "./setnotification";

function App() {

  var selection=useState(0);
  requestPermission();
  return (
    <div >
     <Nav />
     <Selectionbar passSelection={selection} />
     <Mainscreen SetSelection={selection[0]}  />
    </div>
  );
}

export default App;
