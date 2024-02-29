import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function Item(props) {
  const { id } = props;

  const style = {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    justifyContent: "center",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    margin: "10px 0",
    background: "white"
  };

  return <div style={style}>{id}</div>;
}

export default function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item id={props.id} />
    </div>
  );
}
