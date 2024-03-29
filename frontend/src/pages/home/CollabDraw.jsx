import React from 'react'
import { Tldraw } from "@tldraw/tldraw";
import "../../index.css";

const CollabDraw = () => {

  const onChange=(event)=>{
console.log('event',event);
  }
  
  return (
    <div style={{ position: 'fixed', inset: 0, left:'120px', top:'20px', right:'20px' }}>
    <Tldraw
      onUiEvent={(event) => {
        onChange(event);
      }}
     />
  </div>
  )
}

export default CollabDraw