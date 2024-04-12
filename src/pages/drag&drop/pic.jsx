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
      <img ref={drag} src={url} alt="img not found" height="280px" width="280px"  style={{border:isDragging?"7px solid black":"0px",border:"1px solid black",borderRadius:"10px"}}/>
    </div>
  )
}

export default Pic
