import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { IItem } from "../../interfaces/IItem";
import Accordion from "./Accordion";
import CalculatorComponent from "../Calculator/CalculatorComponent";

const someObjects = [
  { title: "Thailand", text: "Best beaches and sea food" },
  { title: "Italy", text: "Culture and history" },
  { title: "Finland", text: "Most peaceful glamping" },
];

export default function TravelComponent() {
  const [items, setItems] = useState<IItem[]>([]);

  function handleAddItems(item: IItem) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item: IItem) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <div className="accordion_calc">
        <Accordion data={someObjects} />
        <CalculatorComponent />
      </div>
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
