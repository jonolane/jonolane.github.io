import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faStar, faCircle } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  name: string;
  description: string | null;
  language: string | null;
  forks_count: number;
  stargazers_count: number;
}

const Card: React.FC<CardProps> = ({ name, description, language, forks_count, stargazers_count }) => {
  return (
    <div className="border border-solid border-white rounded-lg shadow-lg p-4 mb-4 flex flex-col text-white">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="flex-grow">{description}</p>
      <div className="flex justify-between items-end mt-4">
        <div className="flex items-start">
          <span>
            <FontAwesomeIcon icon={faCircle} className="text-xs mr-1" />
            {language}
          </span>
        </div>
        <div className="flex items-end">
          {forks_count > 0 && (
            <span className="mr-2">
              <FontAwesomeIcon icon={faCodeBranch} />
              <span className="ml-1">{forks_count}</span>
            </span>
          )}
          {stargazers_count > 0 && (
            <span className="">
              <FontAwesomeIcon icon={faStar} />
              <span className="ml-1">{stargazers_count}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;