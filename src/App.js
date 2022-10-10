import React from "react";
import Draggable from 'react-draggable';
import logo from './pompier.png';
import './App.css';
import Clock from './components/clock';
import Caserne from "./components/Caserne";
import Sinistre from "./components/Sinistre";
import DragDrop from "./components/DragDrop";
import Dropzone from "./components/Dropzone";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { PetCard } from "./components/PetCard";
import { Basket } from "./components/Basket";
//import DragJC from "./components/SortableTest";


function App() {

  const [title, setTitle] = React.useState("Operation PimPon");

  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="title1">{title}</h1>
        <div>
          <div id="caserne"><Caserne /></div><div id="sinistre"><Sinistre /></div>
        </div>

        {/* <div>
          <div className="container">
            <h1 className="text-center">Drag and Drop Test</h1>
            <div id="dropcolor"><Dropzone/></div>
          </div>
        </div>     */}



        <DndProvider backend={HTML5Backend}>
            <Basket/>
        </DndProvider>
        
        

      </header>
    </div>
  );
}

export default App;
