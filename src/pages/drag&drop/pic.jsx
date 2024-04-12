import React from 'react'
import {useDrag} from "react-dnd";
const Pic= ({id,url}) => {
    const [{isDragging},drag]=useDrag(()=>({
        type:"image",
        item:{id:id},
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging()
        }),
    }))
  return (
    <div>
      <img ref={drag} src={url} alt="img not found" height="300px" width="300px"  style={{border:isDragging?"7px solid black":"0px"}}/>
    </div>
  )
}

export default Pic
