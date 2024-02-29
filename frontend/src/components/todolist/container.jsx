import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

import SortableItem from "./sortable_item";

const containerStyle = {
  background: "#fff",
  borderRadius: "5px",
  padding: 10,
  margin: 10,
  flex: 1,

};


export default function Container(props) {
  const { id, items, name } = props;

  const todoHead = {
    textAlign:'center',
    padding: 10,
    borderRadius: "5px",
    background: name == 'TODO'? 'rgb(164 177 217)' : name == 'PROGRESS' ? 'rgb(237 222 131)' : 'rgb(172 221 153)'
  
  };

  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} style={containerStyle}>
        <div style={todoHead}>{props.name}</div>
        {items.map((id) => (
          <SortableItem key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
}
