
import React from 'react';

function ServiceCard({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default ServiceCard;
