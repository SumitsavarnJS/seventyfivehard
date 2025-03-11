// components/Card.js
"use client";
import Link from 'next/link';

export default function Card({ id, title, category }) {
  return (
    <Link href={`/days/${id}`}>
      <div className="card">
        <h3>{title}</h3>
        <p>{category}</p>
        <style jsx>{`
          .card {
            border: 1px solid #ccc;
            padding: 16px;
            border-radius: 8px;
            width: 200px;
            cursor: pointer;
            transition: transform 0.2s ease;
            margin: 8px;
          }
          .card:hover {
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </Link>
  );
}
