import React from "react";
import { IItem } from "../../interfaces/IItem";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start packing! 🚀</em>
      </p>
    );

  const totalItems = items.length;
  const packedItems = items.filter((item: IItem) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything ready to go! ✈"
          : `You have ${totalItems} items on your list, and you have already packed
          ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
