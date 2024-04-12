import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from "react-dnd-html5-backend"
import Helper from './helper.jsx'
import "./dragdrop.css"
const Dragdrop = () => {
  return (
    <div>
     <DndProvider backend={HTML5Backend}>
         <Helper />
     </DndProvider>
    </div>
  )
}

export default Dragdrop
