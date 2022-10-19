import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarValue: React.FC = () => (
  <div className="flex flex-row">
    <template>
      <div>
        <template>
          <FaStarHalfAlt className="text-yellow-400" />
        </template>
        <template>
          <FaStar className="text-yellow-400" />
        </template>
        <template>
          <FaStar className="text-yellow-400" />
        </template>
      </div>
    </template>
  </div>
);

export default StarValue;
