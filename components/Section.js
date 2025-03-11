// components/Section.js
"use client";
import { useState } from 'react';
import Card from './Card';

export default function Section({ title, cards }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="section">
      <h2 onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
        {title} {expanded ? '[-]' : '[+]'}
      </h2>
      {expanded && (
        <div className="cards-container">
          {cards.map((card) => (
            <Card key={card.id} id={card.id} title={card.title} category={card.category} />
          ))}
        </div>
      )}
      <style jsx>{`
        .section {
          margin-bottom: 20px;
        }
        .cards-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
