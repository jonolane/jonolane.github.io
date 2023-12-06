import React from "react";

interface CardProps {
  name: string;
  description: string | null;
}

const Card: React.FC<CardProps> = ({ name, description }) => {
  return (
    <div className="border border-solid rounded-lg shadow-lg p-4 mb-4">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default Card;