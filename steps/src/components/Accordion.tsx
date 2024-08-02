import React, { ReactNode, useState } from "react";

interface IAccordion {
  key?: string;
  num: number | null;
  title: string;
  text?: string;
  curOpen: number | null;
  onOpen: (arg: number | null) => void;
  children?: ReactNode;
}

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState<number | null>(null);

  return (
    <div className="accordion">
      {data.map((item: IAccordion, index: number) => (
        <AccordionItem
          key={`${item.title}_${index}`}
          num={index}
          title={item.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }: IAccordion) {
  const isOpen = num === curOpen;

  function handleToggle(): void {
    onOpen(isOpen ? null : num);
  }

  return (
    <>
      <div className="content-box" onClick={handleToggle}>
        <div className={`item ${isOpen ? "open" : ""}`}>
          {num && <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>}
          <p className="title">{title}</p>
          <p className="icon">{isOpen ? `-` : `+`}</p>
        </div>
        {isOpen && <div className="item">{children}</div>}
      </div>
    </>
  );
}
