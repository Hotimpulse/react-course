import React, { ChangeEvent, FormEvent, useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { IItem } from "../interfaces/IItem";
import Accordion from "./Accordion";

const someObjects = [
  { title: "Hello1", text: "Text some text hello" },
  { title: "Hello2", text: "Text some text hello2" },
  { title: "Hello3", text: "Text some text hello3" },
];

export default function App() {
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
      <Accordion data={someObjects} />
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
