import React, { useState } from "react";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={`${item.title}_${index}`}
          num={index}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggle(): void {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <div className="content-box" onClick={handleToggle}>
        <div className={`item ${isOpen ? "open" : ""}`}>
          <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
          <p className="title">{title}</p>
          <p className="icon">{isOpen ? `-` : `+`}</p>
        </div>
        {isOpen && <p className="item">{text}</p>}
      </div>
    </>
  );
}
