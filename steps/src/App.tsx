import React, { ChangeEvent, FormEvent, useState } from "react";

const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false,
  },
  {
    id: 3,
    description: "Charger",
    quantity: 1,
    packed: true,
  },
];

interface Item {
  id?: number;
  description: string;
  quantity: number;
  packed: boolean;
}

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 👜 </h1>;
}

function Form() {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for your trip? 😍</h3>
      <select
        name="item"
        id="form-items"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
      />
      <button>Add</button>
    </form>
  );
}

function Item(item: Item) {
  return (
    <li>
      <span
        style={item.packed === true ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} {item.description}
      </span>
      <button>Delete ❌</button>
    </li>
  );
}

function PackingList() {
  return (
    <div className="list">
      <h2>LIST</h2>
      <ul>
        {initialItems.map((item: Item, index: number) => (
          <Item
            key={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
          />
        ))}
      </ul>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you have already packed X (X%)</em>
    </footer>
  );
}
